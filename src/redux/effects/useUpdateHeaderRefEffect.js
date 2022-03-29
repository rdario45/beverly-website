import { useEffect } from 'react';

const useUpdateHeaderRefEffect = ({ headerRef, dispatch }) => {
    useEffect(() => {
        dispatch({
            type: "headerHeight",
            payload: headerRef.current ? headerRef.current.clientHeight : 0
        });

    }, [headerRef]);
}

export default useUpdateHeaderRefEffect;