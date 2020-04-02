import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/session_actions';

const Login = () => {
  
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preentDefault();
    const user = Object.assign({}, {username: username, password: password});
    dispatch(login(user));
  }

  return(
    <div>
      <form>
        <label>
          Admin Username:
          <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) }/>
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