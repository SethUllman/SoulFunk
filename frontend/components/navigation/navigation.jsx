import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Nav = () => {

  const loggedIn = () => {
    const currentAdmin = useSelector(state => state.session.currentAdmin);
    if (currentAdmin){
      return <h3>{`Welcome ${currentAdmin.username}!`}</h3>
    }
  }

  return(
    <div>
      <div>{loggedIn()}</div>
      <ul>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/shows">Shows</a></li>
        <li><a href="#/gallery">Gallery</a></li>
        <li><a href="#/band">The Band</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
    </div>
  );

}

export default Nav;