import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/session_actions';

const Login = () => {
  
  // const dispatch = useDispatch();
  // const errors = useSelector(errors => StaticRange.errors.session);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <div>
      <form>
        <label>
          Admin Email:
          <input type="text" value={email}/>
        </label>
        <label>
          Admin Password:
          <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)} />
        </label>
        <button onClick={() => {
          login();
        }}>Login</button>
      </form>
    </div>
  );
  
}

export default Login;