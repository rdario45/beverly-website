import { useEffect } from 'react';

const useWindowsResize = ( resize, dispatch ) => {
    useEffect(() => {
        // function handleResize() {
        //     setWindowDimensions({ height, width });
        // }
        // window.addEventListener('resize', handleResize);
        // return () => window.removeEventListener('resize', handleResize);

    }, [resize]);
}

export default useWindowsResize;