// src/components/Footer.js
import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import { footer } from '../content/footer-content'; // Import footer translations

const Footer = ({ language }) => {
    const content = footer[language];

    return (
        <Box as="footer" bg="teal.500" color="white" py={6} mt={8}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="center" align="center" mx="auto">
                {/* Footer Links */}
                <Flex gap={6} mb={{ base: 4, md: 0 }} justify="center">
                    <Link href="/inquiry" color="white" _hover={{ textDecoration: 'underline' }}>
                        {content.inquiry}
                    </Link>
                    <Link href="/contact" color="white" _hover={{ textDecoration: 'underline' }}>
                        {content.contact}
                    </Link>
                    <Link href="/directions" color="white" _hover={{ textDecoration: 'underline' }}>
                        {content.directions}
                    </Link>
                    <Link href="/terms" color="white" _hover={{ textDecoration: 'underline' }}>
                        {content.terms}
                    </Link>
                    <Link href="/imprint" color="white" _hover={{ textDecoration: 'underline' }}>
                        {content.imprint}
                    </Link>
                </Flex>
            </Flex>

            {/* Footer Copyright */}
            <Text textAlign="center" fontSize="sm" mt={4}>
                &copy; {new Date().getFullYear()} buehner translation, All Rights Reserved, 版权所有
            </Text>
        </Box >
    );
};

export default Footer;
