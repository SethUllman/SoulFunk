import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/session_actions';

const Login = () => {
  
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleSubmit = (e) => {
    e.preentDefault();
    const user = Object.assign({}, {email: email, password: password});
    dispatch(login(user));
  }

  return(
    <div>
      <form>
        <label>
          Admin Email:
          <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) }/>
        </label>
        <label>
          Admin Password:
          <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)} />
        </label>
        <button onClick={() => {
          handleSubmit();
        }}>Login</button>
      </form>
    </div>
  );
  
}

export default Login;