import { useState } from "react";
import { useEffect } from "react";

const useImage = (src) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(true);
        };

        img.src = src;
    }, [src]);

    return { source: src, loaded }
};

export default useImage;