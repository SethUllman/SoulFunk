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
    if (!event.target.matches('.nav-modal') && !event.target.matches('.open-nav') && !event.target.matches('.nav-bars') && nav.className == 'nav-modal-show') {
      closeModal();
    }
  }

  const dropDown = (e) => {
    const nav = document.getElementById('nav-modal');
    const background = document.getElementById('drop-background');
    const body = document.getElementById('body');
    const dropContents = document.getElementById('nav-drop-contents');
    if (nav.className == ('nav-modal')) {
      dropContents.className = 'nav-drop-contents-show';
      nav.className = 'nav-modal-show';
      background.className = 'drop-background-show';
      body.className = 'body-disable';
    } else {
      dropContents.className = 'nav-drop-contents';
      nav.className = 'nav-modal';
      background.className = 'drop-background';
      body.className = '';
    }
  }

  const closeModal = () => {
    let nav = document.getElementById('nav-modal');
    let background = document.getElementById('drop-background');
    let dropContents = document.getElementById('nav-drop-contents');
    let body = document.getElementById('body');


    if (nav.className == 'nav-modal-show') {
      nav.className = 'nav-modal';
      background.className = 'drop-background';
      dropContents.className = 'nav-drop-contents';
      body.className = '';
    }
  }

  return(
    <div className='nav-div'>
      <div className='nav-drop'>
        <div className='open-nav' onClick={(e) => {dropDown(e)}}>
          <FaBars id='bars' className='nav-bars' size='90px' color="black"></FaBars>
        </div>
        <div id='nav-drop-contents' className='nav-drop-contents'>
          <div id='nav-modal' className='nav-modal'>
            <div className='nav-li' onClick={() => {
              closeModal();
              history.push("/home")}}>Home
            </div>
            <div className='nav-li' onClick={() => {
              closeModal();
              history.push("/shows")}}>Shows
            </div>
            {/* <div className='nav-li' onClick={() => {
              closeModal();
              history.push("/gallery")}}>Gallery
            </div> */}
            <div className='nav-li' onClick={() => {
              closeModal();
              history.push("/members")}}>The Band
            </div>
            <div className='nav-li' onClick={() => {
              closeModal();
              history.push("/contact")}}>Contact
            </div>
          </div>
          <div id='drop-background' className='drop-background'>
            <MdClose size='100px' className='drop-background-close'></MdClose>
          </div>
        </div>
      </div>
      <div className='nav-logo'></div>
    </div>
    
  );

}

export default Nav;