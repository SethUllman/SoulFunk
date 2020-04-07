import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../../actions/session_actions';

const footer = () => {

  const dispatch = useDispatch();

  const loggedIn = () => {
    const currentAdmin = useSelector(state => state.session.currentAdmin);
    if (currentAdmin) {
      return (
        <div>
          <button onClick={() => {
            dispatch(logout());
          }}>Logout</button>
        </div>
      )
    } else {
      return (
        <a href="#/login">Admin Login</a>
      )
    }
  }

  return(
    <div>
      {loggedIn()}
    </div>
  );

}

export default footer;