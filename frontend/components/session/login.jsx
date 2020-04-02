import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/session_actions';

const Login = () => {
  
  // const dispatch = useDispatch();
  // const errors = useSelector(errors => StaticRange.errors.session);

  const [email, password] = useState(0);

  return(
    <div>
      <form>
        <label>
          Admin Email:
          <input type="text" />
        </label>
        <label>
          Admin Password:
          <input type="text" />
        </label>
        <button onClick={() => {
          login();
        }}>Login</button>
      </form>
    </div>
  );
  
}

export default Login;