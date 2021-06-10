/**
 * From Stack Overflow: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 */

import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const isBrowser = typeof window !== "undefined"

    if (isBrowser) {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    } else {
        return {
            width: 0,
            height: 0
        }
    }

}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}