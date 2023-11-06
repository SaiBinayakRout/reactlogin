import React from 'react';
import '../../homeStyle.css';

const HomePage = ({onSignInClick}) => {
  
  return (
    <div className='home-container'>
    <div className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
        <span>Website Name</span>
      </div>
      <ul className="navbar-menu">
        <li className='menu-item-home'>Home</li>
        <li className='menu-item-about'>About</li>
      </ul>
      <div className="navbar-signin" onClick={onSignInClick}>
        Sign In
        <img src="user.png" alt=" " />
      </div>
    </div>
    </div>
  );
};

export default HomePage;