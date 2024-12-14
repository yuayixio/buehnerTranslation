// src/pages/index.js
import React from 'react';
import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to My Translation Services
      </Heading>
      <Text fontSize="lg" mb={6}>
        Providing high-quality translation, interpretation, and consulting services.
        With years of experience and expertise in multiple languages, we ensure accurate
        and reliable translations for all your needs.
      </Text>
    </Box>
    <VStack spacing={8} align="stretch" px={6}>
      <Box>
        <Link href="/translation" color="teal.500" fontWeight="bold">
          Translation
        </Link>
        <Text>Professional translation services for documents, websites, and more.</Text>
      </Box>
      <Box>
        <Link href="/interpretation" color="teal.500" fontWeight="bold">
          Interpretation
        </Link>
        <Text>Expert interpretation services for meetings, conferences, and events.</Text>
      </Box>
      <Box>
        <Link href="/language-services" color="teal.500" fontWeight="bold">
          Language Services
        </Link>
        <Text>Comprehensive language services including editing and proofreading.</Text>
      </Box>
      <Box>
        <Link href="/china-consulting" color="teal.500" fontWeight="bold">
          China Consulting
        </Link>
        <Text>Specialized consulting services for businesses dealing with China.</Text>
      </Box>
    </VStack>
  </Layout>
);

export default IndexPage;