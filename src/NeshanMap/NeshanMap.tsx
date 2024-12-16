import React, {useEffect, useRef} from "react";
import neshanMapLoader from "./neshan_map_loader.js";

export interface Option {
    key: string,
    maptype: string,
    poi: boolean,
    traffic: boolean,
    center: [number, number],
    zoom: number
}

export interface NeshanMapProps {
    style: {
        [key: string]: string
    }
    options: Option
    onInit: (L: any, myMap: any) => void;
    onChange: (L: any, myMap: any) => void
}

const NeshanMap = (props: NeshanMapProps) => {

    const {
        style,
        options,
        onInit,
        onChange
    } = props;

    const mapEl = useRef(null);
    const defaultStyle = {
        width: "600px",
        height: "450px",
        margin: 0,
        padding: 0,
        background: "#eee"
    };
    const defaultOptions = {
        key: "YOUR_API_KEY",
        maptype: "dreamy",
        poi: true,
        traffic: false,
        center: [35.699739, 51.338097],
        zoom: 14
    };

    useEffect(() => {
        neshanMapLoader({
            onLoad: () => {
                (window as any).map = new (window as any).L.Map(mapEl.current, {
                    ...defaultOptions,
                    ...options
                });
                if (onInit) onInit((window as any).L, (window as any).map);
            },
            onError: () => {
                console.error("Neshan Maps Error: This page didn't load Neshan Maps correctly");
            }
        });
    }, []);

    useEffect(() => {
        if (onChange) onChange((window as any).L, (window as any).map)
    }, [props])

    return (
        <div style={{...defaultStyle, ...style}} ref={mapEl}/>
    )
};

export default NeshanMap;
