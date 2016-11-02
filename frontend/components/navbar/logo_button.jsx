import React from 'react';
import {Link} from 'react-router';

const buttonStyle = {
  width: '100%'
};

const LogoButton = () => (
  <div className='logo'>
    <Link to="/">
      <h1>Sandcamp</h1>
    </Link>
  </div>
);

export default LogoButton;
