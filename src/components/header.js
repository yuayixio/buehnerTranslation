// src/components/Header.js
import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

const Header = () => (
  <Box as="header" bg="teal.500" color="white" py={4}>
    <Flex maxW="1200px" mx="auto" px={4} align="center" justify="space-between">
      <Heading as="h1" size="lg">
        <Link as={GatsbyLink} to="/" _hover={{ textDecoration: 'none' }} color="white">
          My Translation Services
        </Link>
      </Heading>
      <Flex as="nav" gap={4}>
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