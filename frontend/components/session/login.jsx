import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const Login = () => {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const currentAdmin = useSelector(state => state.currentAdmin);

  const handleSubmit = (e) => {
    
    const admin = Object.assign({}, {username: username, password: password});
    dispatch(login(admin));
    history.push('/home')
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        
        <label>
          Admin Username:
          <input 
            type="text" 
            value={username} 
            onChange={ (e) => setUsername(e.target.value) }
          />
        </label>
        <label>
          Admin Password:
          <input 
            type="password" 
            value={password} 
            onChange={ (e) => setPassword(e.target.value)} 
          />
        </label>
        <input type='submit' value='login' />
      </form>
    </div>
  );
  
}

export default Login;