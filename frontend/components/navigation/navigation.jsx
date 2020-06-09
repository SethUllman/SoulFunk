import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const Nav = () => {

  const dispatch = useDispatch();
  const history = useHistory();

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
    <div className='nav-div'>
      <div>{welcomeMessage()}</div>
      <ul className='nav-ul'>
        <li onClick={() => {history.push("/home")}}>Home</li>
        <li onClick={() => {history.push("/shows")}}>Shows</li>
        <li onClick={() => {history.push("/gallery")}}>Gallery</li>
        <li onClick={() => {history.push("/members")}}>The Band</li>
        <li onClick={() => {history.push("/contact")}}>Contact</li>
      </ul>
    </div>
  );

}

export default Nav;