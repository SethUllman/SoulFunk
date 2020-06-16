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

  const handleSubmit = () => {
    
    const admin = Object.assign({}, {username: username, password: password});
    dispatch(login(admin));
    history.push('/home')
  }

  return(
    <div className='form-div'>
      <form onSubmit={handleSubmit} className='form'>
        
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
  
}

export default Login;