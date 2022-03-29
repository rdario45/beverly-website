import { useReducer } from 'react';
import AuthReducer from '../store/AuthReducer';
import { send, signin } from "../../api/AuthController";

function useBeverlyAuth(authState) {
    const [state, dispatch] = useReducer(AuthReducer, authState);

    const setPhone = (phone) => {
        dispatch({
            type: "phone",
            payload: phone
        })
        localStorage.setItem("phone", phone);
    }

    const sendCode = (phone) => {
        send([phone]).then(body => {
            dispatch({
                type: "waitingOTP",
                payload: true
            })
        });
    }

    const setCode = (code) => {
        dispatch({
            type: "code",
            payload: code
        })
    }

    const login = (phone, code) => {
        signin([phone, code]).then(response => {
            response.json().then(body => {
                dispatch({
                    type: "accessToken",
                    payload: body.accessToken
                })
                localStorage.setItem("accessToken", body.accessToken);
            });
        })
    }

    return [state.accessToken, {
        waitingOTP: state.waitingOTP,
        sendcodeCtrl: {
            phone: state.phone,
            setPhone,
            sendCode
        },
        signinCtrl: {
            phone: state.phone,
            code: state.code,
            setCode,
            login
        }

    }];
}

export default useBeverlyAuth;