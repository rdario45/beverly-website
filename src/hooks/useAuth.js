import { useState } from 'react';
import { 
    storeAccessToken, 
    geAccessToken
} from '../store/index';

function useAuth() {
    const [token, setToken] = useState(geAccessToken())
      
    function login ({ accessToken }) {
        storeAccessToken(accessToken);
        setToken(accessToken);
    }

    return [token, login];
}

export default useAuth;