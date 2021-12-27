import React, { useState } from 'react';
import api from '../api'

function SingUp({ login, setOnline }) {

    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [code, setCode] = useState(null)  
    const [sent, setSent] = useState(false);

    const handleSubmit=(event) => {
        event.preventDefault();
        api.signup(name, phone, code).then(response => {
            login(response);
        });
    }

    const sendCode = () => {
        api.sendCode(phone);
        setSent(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>name</p>
                    <input type="text" onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                    <p>phone</p>
                    <input type="text" onChange={e => setPhone(e.target.value)}/>
                </label>

                { sent &&  <label>
                    <p>code</p>
                    <input type="text" onChange={e => setCode(e.target.value)}/>
                </label>}
                <div>
                    { !sent ? <button onClick={()=>sendCode()}> Send</button> : <button type="submit">Sing up</button>}
                </div>
            </form>
            <a style={{"textDecoration": "underline"}}onClick={()=>setOnline(true)}>Sing In</a>
        </div>
    );
}

export default SingUp;
