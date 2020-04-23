import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const Nav = () => {

  const dispatch = useDispatch();

  const welcomeMessage = () => {
    const currentAdmin = useSelector(state => state.session.currentAdmin);
    if (currentAdmin){
      return (
        <div>
          <h3>{`Welcome ${currentAdmin.username}!`}</h3>
        </div>
      )
    }
  }

  return(
    <div>
      <div>{welcomeMessage()}</div>
      <ul>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/shows">Shows</a></li>
        <li><a href="#/gallery">Gallery</a></li>
        <li><a href="#/members">The Band</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
    </div>
  );

}

export default Nav;