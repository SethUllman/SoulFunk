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
        <div className='footer-container'>
          <button onClick={() => {
            dispatch(logout());
          }}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className='footer-container'>
          <i className='fab fa-facebook' aria-hidden='true' onClick={() => { window.open('https://www.facebook.com/TheSoulFunkCollective', '_blank')}}></i>
          <i className="fab fa-instagram" aria-hidden='true' onClick={() => {window.open('https://www.instagram.com/thesoulfunkcollective/', '_blank')}}></i>
          <i className="fas fa-sign-in-alt" aris-hidden='true' onClick={() => {history.push('/login')}}></i>
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