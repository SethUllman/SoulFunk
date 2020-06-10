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

  window.onclick = function(event) {
    if (!event.target.matches('.nav-drop')) {
      let dropdowns = document.getElementsByClassName("nav-ul");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const dropDown = () => {
    let nav = document.getElementById('nav-ul');
    if (nav.className.indexOf('show') == -1) {
      nav.className += 'show';
    } else {
      nav.className = nav.className.replace('show', '');
    }
  }

  return(
    <div className='nav-div'>
      <div>{welcomeMessage()}</div>
      <div className='nav-drop'>
        <FaBars className='nav-bars' size='45px' onClick={dropDown}></FaBars>
        <ul id='nav-ul' className='nav-ul'>
          <li className='nav-li' onClick={() => {history.push("/home")}}>Home</li>
          <li className='nav-li' onClick={() => {history.push("/shows")}}>Shows</li>
          <li className='nav-li' onClick={() => {history.push("/gallery")}}>Gallery</li>
          <li className='nav-li' onClick={() => {history.push("/members")}}>The Band</li>
          <li className='nav-li' onClick={() => {history.push("/contact")}}>Contact</li>
        </ul>
      </div>
      <div className='nav-logo'></div>
      
    </div>
  );

}

export default Nav;