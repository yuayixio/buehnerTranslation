// src/components/Header.js
import React, { useState } from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { navbar } from '../content/nav-bar-content';



const Header = () => {

  const [language, setLanguage] = useState('en');

  const content = navbar[language];
  return (
    < Box as="header" bg="teal.500" color="white" py={4} >
      <Flex pl={4} pr={10} align="center" justify="space-between">
        {/* Logo (Aligned to the Left) */}
        <Heading as="h1" size="lg">
          <Link as={GatsbyLink} to="/" _hover={{ textDecoration: 'none' }} color="white">
            Buehner Translation
          </Link>
        </Heading>

        {/* Navigation Links (Aligned to the Right) */}
        <Flex as="nav" gap={8} ml="auto">  {/* This pushes the menu items to the far right */}
          <Link as={GatsbyLink} to="/services" _hover={{ textDecoration: 'underline' }}>
            {content.offerings}
          </Link>
          <Link as={GatsbyLink} to="/services#about" _hover={{ textDecoration: 'underline' }}>
            {content.about}
          </Link>
          <Link as={GatsbyLink} to="/prices" _hover={{ textDecoration: 'underline' }}>
            {content.price}
          </Link>
          <Link as={GatsbyLink} to="/contact" _hover={{ textDecoration: 'underline' }}>
            {content.contact}
          </Link>
        </Flex>
      </Flex>
    </Box >
  )
};

export default Header;
