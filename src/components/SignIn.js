import React, { useState } from 'react';
import api from '../api'

function SingIn({ login, setOnline }) {
    const [phone, setPhone] = useState(null);
    const [code, setCode] = useState(null);
    const [sent, setSent] = useState(false);

    const handleSubmit=(event) => {
        event.preventDefault();

        console.log(sent)
        if (sent){
            api.signin(phone, code).then(response => {

                login(response);
            });
        }
    }

    const sendCode = () => {
        console.log("ask fort code")
        api.sendCode(phone).then( resp => {
          console.log('response', resp);
        })
        setSent(true);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>phone</p>
                    <input type="text" onChange={e => setPhone(e.target.value)}/>
                </label>
                { sent &&  <label>
                    <p>code</p>
                    <input type="text" onChange={e => setCode(e.target.value)}/>
                </label>}
               
                <div>
                    { !sent ? <button onClick={()=>sendCode()} >Send</button> : <button type="submit">Sing In</button> }
                </div>
            </form>
            <a style={{"textDecoration": "underline"}}onClick={()=>setOnline(false)}>Sing Up</a>
        </div>
    );
}

export default SingIn;
