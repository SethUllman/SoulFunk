import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const footer = () => {

  const dispatch = useDispatch();
  const history = useHistory();

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
        <div className='footer-container'>
          <div onClick={() => {
            console.log('click');
            history.push('/login');
            }} className='admin-login'>Admin Logins</div>
        </div>
      );
    }
  }

  return(
    <div>
      {loggedIn()}
    </div>
  );

}

export default footer;