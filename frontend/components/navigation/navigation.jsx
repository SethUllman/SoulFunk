import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { FaBars } from 'react-icons/fa';

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
      <div className='nav-drop'>
        <FaBars className='nav-bars' size = '112px'></FaBars>
        <ul className='nav-ul'>
          <li onClick={() => {history.push("/home")}}>Home</li>
          <li onClick={() => {history.push("/shows")}}>Shows</li>
          <li onClick={() => {history.push("/gallery")}}>Gallery</li>
          <li onClick={() => {history.push("/members")}}>The Band</li>
          <li onClick={() => {history.push("/contact")}}>Contact</li>
        </ul>
      </div>
      <div className='nav-logo'></div>
      
    </div>
  );

}

export default Nav;