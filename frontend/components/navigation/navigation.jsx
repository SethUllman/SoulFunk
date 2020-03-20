import React from 'react';
import { Redirect } from 'react-router-dom';

const Nav = () => {

  return(
    <div>
      <ul>
        <li><a href="#/home">Home</a></li>
        <li>Shows</li>
        <li>Gallery</li>
        <li>The Band</li>
        <li>Contact</li>
        <li><a href="#/login">login</a></li>
      </ul>
    </div>
  );

}

export default Nav;