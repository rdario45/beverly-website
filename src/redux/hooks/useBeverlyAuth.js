import { useState } from 'react';
// import {
//     setAccessToken,
//     geAccessToken
// } from '../store/BveverlyReducer';

function useBeverlyAuth() {
    const [token, setToken] = useState(null);

    function login({ accessToken }) {
        console.log("accessToken", accessToken);
        // setAccessToken(accessToken);
        // setToken(accessToken);
    }
    return [token, login];
}

export default useBeverlyAuth;