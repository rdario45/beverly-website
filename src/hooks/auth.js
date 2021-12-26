import { useState } from 'react';
import { 
    storeAccessToken, 
    geAccessToken, 
    cleanAccessToken, 
    storeUserPhone, 
    getUserPhone, 
    cleanUserPhone  
} from '../store/index';

const initialValue = {
    name: null,
    phone: getUserPhone()
}

function useAuth() {
    const [token, setToken] = useState(geAccessToken())
    const [user, setUser] = useState(initialValue);

    function logout () {
        setToken(null);
        setUser(null);
        cleanUserPhone();
        cleanAccessToken();
        console.log('logout')
    }
    function login (phone, name, acces_token) {
        console.log('login', phone, name, acces_token)
        setToken(acces_token);
        storeAccessToken(token);
        setUser(name);
        storeUserPhone(phone);
    }

    return [logout, login, token, user];
}

export default useAuth;