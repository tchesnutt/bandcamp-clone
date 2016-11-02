import React from 'react';
import LogoButton from './logo_button';
import SessionButtonContainer from './session_form/session_button_container';

const NavBar = () => (
  <div className='nav'>
    <LogoButton />
    <SessionButtonContainer />
  </div>
);

export default NavBar;
