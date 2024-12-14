// src/components/Header.js
import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

const Header = () => (
  <Box as="header" bg="teal.500" color="white" py={4}>
    <Flex pl={4} pr={10} align="center" justify="space-between">
      {/* Logo (Aligned to the Left) */}
      <Heading as="h1" size="lg">
        <Link as={GatsbyLink} to="/" _hover={{ textDecoration: 'none' }} color="white">
          Buehner Translation
        </Link>
      </Heading>

      {/* Navigation Links (Aligned to the Right) */}
      <Flex as="nav" gap={8} ml="auto">  {/* This pushes the menu items to the far right */}
        <Link as={GatsbyLink} to="/translation" _hover={{ textDecoration: 'underline' }}>
          Translation
        </Link>
        <Link as={GatsbyLink} to="/interpretation" _hover={{ textDecoration: 'underline' }}>
          Interpretation
        </Link>
        <Link as={GatsbyLink} to="/language-services" _hover={{ textDecoration: 'underline' }}>
          Language Services
        </Link>
        <Link as={GatsbyLink} to="/china-consulting" _hover={{ textDecoration: 'underline' }}>
          China Consulting
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Header;
