import { useState } from 'react';
import { 
    storeAccessToken, 
    geAccessToken, 
    cleanAccessToken, 
    storeUserPhone, 
    getUserPhone, 
    cleanUserPhone  
} from '../store/index';

function useAuth() {
    const [token, setToken] = useState(geAccessToken())
    const [phone, setPhone] = useState({phone: getUserPhone()})

    function logout () {
        // setToken(null);
        // cleanAccessToken();
    }
    function login (phone, accessToken) {
        console.log('login', phone, accessToken)
        storeAccessToken(token);
        // storeUserPhone(phone);
    }

    return [logout, login, token, user];
}

export default useAuth;