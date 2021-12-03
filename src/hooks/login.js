import { useState } from 'react';
import { setToken as setTokenStore, getToken } from '../store/index';

function useLoginHook() {

    const [token, setToken] = useState(getToken())

    function setAccessToken(token) {
        setToken(token)
        setTokenStore(token)
    }

    return [token, setAccessToken];
}

export default useLoginHook