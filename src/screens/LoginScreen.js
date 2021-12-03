import React from 'react';
import useLoginHook from '../hooks/login'
function LoginScreen() {

  const [state, signIn] = useLoginHook();

  const handleChange=(event) => {
    this.setState({value: event.target.value});
  }

  const handleSubmit=(event) => {
    alert('An essay was submitted: ' + state.value);
    event.preventDefault();
    signIn(state.telephone, state.code);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <p>telephone</p>
        <input type="text" value={state.telephone} onChange={handleChange}/>
      </label>
      <label>
        <p>code</p>
        <input type="text" value={state.code} onChange={handleChange}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}


export default LoginScreen;