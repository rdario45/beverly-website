import { useEffect } from 'react';

const useUpdateHeaderRefEffect = ({ headerRef, dispatch }) => {
    useEffect(() => {
        dispatch({
            type: "headerHeight",
            payload: headerRef?.current.clientHeight
        });

    }, [headerRef]);
}

export default useUpdateHeaderRefEffect;