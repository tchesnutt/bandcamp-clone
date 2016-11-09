import React from 'react';
import {Link} from 'react-router';

const buttonStyle = {
  width: '100%'
};

const LogoButton = () => (
  <section className='logo'>
    <Link to="/">
      <h1>Sandcamp</h1>
    </Link>
  </section>
);

export default LogoButton;
