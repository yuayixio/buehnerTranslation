import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import '../styles/global.css'

const Layout = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  return (
    <Box>
      <Header language={language} setLanguage={setLanguage} />
      <main>{children}</main>
      <Footer language={language} />
    </Box>
  );
};

export default Layout;