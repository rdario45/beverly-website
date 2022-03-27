import { useEffect } from 'react';

const useWindowsSizeEffect = ({ dispatch }) => {
    useEffect(() => {
        const handleResize = () => {
            dispatch({
                type: "orientation",
                payload: window.innerWidth > window.innerHeight ? "horizontal" : "vertical"
            });
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
}

export default useWindowsSizeEffect;