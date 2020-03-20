import React from 'react';
import { Redirect } from 'react-router-dom';

const Nav = () => {

  return(
    <div>
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