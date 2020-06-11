import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

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

  window.onclick = function(event) {
    let nav = document.getElementById('nav-modal');
    if (!event.target.matches('.nav-modal') && !event.target.matches('.nav-bars') && nav.className == 'nav-modalshow') {
      closeModal();
    }
  }

  const dropDown = () => {
    let nav = document.getElementById('nav-modal');

    if (nav.className == ('nav-modal')) {
      nav.className += 'show';
    } else {
      nav.className = 'nav-modal';
    }
  }

  const closeModal = () => {
    let nav = document.getElementById('nav-modal');
    if (nav.className == 'nav-modalshow') {
      nav.className = 'nav-modal';
    }
  }

  return(
    <div className='nav-div'>
      <div>{welcomeMessage()}</div>
      <div className='nav-drop'>
        <FaBars className='nav-bars' size='90px' onClick={dropDown}></FaBars>
        <ul id='nav-modal' className='nav-modal'>
          <MdClose size='90px' className='nav-close' onClick={closeModal}></MdClose>
          <li className='nav-li' onClick={() => {
            closeModal();
            history.push("/home")}}>Home
          </li>
          <li className='nav-li' onClick={() => {
            closeModal();
            history.push("/shows")}}>Shows
          </li>
          <li className='nav-li' onClick={() => {
            closeModal();
            history.push("/gallery")}}>Gallery
          </li>
          <li className='nav-li' onClick={() => {
            closeModal();
            history.push("/members")}}>The Band
          </li>
          <li className='nav-li' onClick={() => {
            closeModal();
            history.push("/contact")}}>Contact
          </li>
        </ul>
      </div>
      <div className='nav-logo'></div>
    </div>
    
  );

}

export default Nav;