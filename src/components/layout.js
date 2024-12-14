// src/components/Layout.js
import React from 'react';
import Header from './header';
import Footer from './Footer';
import '../styles/global.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;