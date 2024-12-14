// src/components/Header.js
import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/translation">Translation</Link></li>
        <li><Link to="/interpretation">Interpretation</Link></li>
        <li><Link to="/language-services">Language Services</Link></li>
        <li><Link to="/china-consulting">China Consulting</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;