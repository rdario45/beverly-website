import { useEffect } from 'react';

const useRedirectLoginEffect = ({ logout, dispatch }) => {
    useEffect(() => {
        if (logout) {
            localStorage.removeItem("accessToken");
            dispatch({
                type: "logout",
                payload: true
            });
        }
    }, [logout]);
}

export default useRedirectLoginEffect;

