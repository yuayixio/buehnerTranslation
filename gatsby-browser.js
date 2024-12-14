// gatsby-browser.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export const wrapRootElement = ({ element }) => (
    <ChakraProvider>{element}</ChakraProvider>
);