import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/session_actions';

const Login = () => {

  const dispatch = useDispatch();
  const login = useSelector(admin => dispatch(login(admin)));
  const errors = useSelector(errors => StaticRange.errors.session);

  return(
    <div>Login Page</div>
  )
}

export default Login;