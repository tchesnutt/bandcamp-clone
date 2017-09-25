import React from 'react';
import { Link } from 'react-router';

const LogoButton = () => (
  <section className='logo'>
    <Link to="/">
      <h1>Soundcamp</h1>
    </Link>
  </section>
);

export default LogoButton;
