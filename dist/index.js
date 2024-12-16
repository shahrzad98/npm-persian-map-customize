'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const BASE_URL = "https://static.neshan.org";
const DEFAULT_URL_SCRIPT = `${BASE_URL}/sdk/leaflet/1.4.0/leaflet.js`;
const DEFAULT_URL_STYLE = `${BASE_URL}/sdk/leaflet/1.4.0/leaflet.css`;
var neshanMapLoader = (props => {
    const createScriptStyle = () => {
        const { onError, onLoad } = props; //-----import style
        if (!document.head.querySelector(`link[href="${DEFAULT_URL_STYLE}"]`)) {
            const style = document.createElement("link");
            style.href = DEFAULT_URL_STYLE;
            style.rel = "stylesheet";
            document.head.appendChild(style);
        } //------import script
        if (window.L) {
            if (onLoad)
                onLoad();
            return;
        }
        const script = document.body.querySelector(`script[src="${DEFAULT_URL_SCRIPT}"]`) || document.createElement("script");
        script.addEventListener("load", () => {
            if (onLoad)
                onLoad();
            return;
        });
        script.addEventListener("error", () => {
            if (onError)
                onError();
            return;
        });
        if (!script.src) {
            script.src = DEFAULT_URL_SCRIPT;
            document.body.appendChild(script);
        }
    };
    return createScriptStyle();
});

const NeshanMap = (props) => {
    const { style, options, onInit, onChange } = props;
    const mapEl = react.useRef(null);
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
    react.useEffect(() => {
        neshanMapLoader({
            onLoad: () => {
                window.map = new window.L.Map(mapEl.current, {
                    ...defaultOptions,
                    ...options
                });
                if (onInit)
                    onInit(window.L, window.map);
            },
            onError: () => {
                console.error("Neshan Maps Error: This page didn't load Neshan Maps correctly");
            }
        });
    }, []);
    react.useEffect(() => {
        if (onChange)
            onChange(window.L, window.map);
    }, [props]);
    return (jsxRuntime.jsx("div", { style: { ...defaultStyle, ...style }, ref: mapEl }));
};

exports.NeshanMap = NeshanMap;
//# sourceMappingURL=index.js.map
