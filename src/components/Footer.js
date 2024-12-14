// src/components/Footer.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => (
    <Box as="footer" bg="teal.500" color="white" py={4} mt={8}>
        <Text textAlign="center" fontSize="sm">
            &copy; {new Date().getFullYear()} My Translation Services. All rights reserved.
        </Text>
    </Box>
);

export default Footer;