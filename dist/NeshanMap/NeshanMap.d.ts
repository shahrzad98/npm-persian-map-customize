/// <reference types="react" />
export interface Option {
    key: string;
    maptype: string;
    poi: boolean;
    traffic: boolean;
    center: [number, number];
    zoom: number;
}
export interface NeshanMapProps {
    style: {
        [key: string]: string;
    };
    options: Option;
    onInit: (L: any, myMap: any) => void;
    onChange: (L: any, myMap: any) => void;
}
declare const NeshanMap: (props: NeshanMapProps) => JSX.Element;
export default NeshanMap;
