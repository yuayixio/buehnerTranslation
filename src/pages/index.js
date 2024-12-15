// src/pages/index.js
import React, { useState } from 'react';
import { Box, Heading, Text, Link, Flex, VStack, Image, Select } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { rightbox } from '../content/index-content'; // Import translations
import ContactForm from '../components/ContactForm';  // Import the contact form component

const IndexPage = () => {
  // Set default language to English
  const [language, setLanguage] = useState('en');

  // Get the selected language content from the translations object
  const content = rightbox[language];

  return (
    <Layout>
      {/* Hero Section */}
      <Box
        position="relative"
        height="80vh"
        bgImage="images/background-image.jpg"
        bgSize="cover"
        bgPosition="center"
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify="center"
          align="center"
          height="100%"
          px={{ base: 4, lg: 8 }}
          position="absolute"
          top="0"
          left="0"
          right="0"
          bg="rgba(0, 0, 0, 0.4)"
        >
          <Box flex="1" maxWidth="50%" position="relative" zIndex="1">
            <Image
              src="images/martina.jpg"
              alt="Translator"
              boxSize="60%"
              objectFit="cover"
              borderRadius="md"
              mx="auto"
              mb={6}
            />
          </Box>
          <Box flex="2" maxWidth="60%" textAlign="left" zIndex="1" color="white" bg="rgba(30, 24, 39, 0.4)" p={6} borderRadius={'md'}>
            <Heading as="h1" size="2xl">
              {content.heroTitle}
            </Heading>
            <Heading as="h2" size="l" mb={4}>
              {content.partner}
            </Heading>
            <Text fontSize="lg" mb={6}>
              {content.heroDescription}
            </Text>
            <VStack spacing={4} align="left" pl={8}>
              <ul style={{ padding: 0 }}>
                <li>
                  <Link href={`/services#translations`} color="teal.300" fontWeight="bold" fontSize="lg">
                    {content.servicesList[0]}
                  </Link>
                </li>
                <li>
                  <Link href={`/services#translations`} color="teal.300" fontWeight="bold" fontSize="lg">
                    {content.servicesList[1]}
                  </Link>
                </li>
                <li>
                  <Link href={`/services#translations`} color="teal.300" fontWeight="bold" fontSize="lg">
                    {content.servicesList[2]}
                  </Link>
                </li>
                <li>
                  <Link href={`/services#interpretation`} color="teal.300" fontWeight="bold" fontSize="lg">
                    {content.servicesList[3]}
                  </Link>
                </li>
                <li>
                  <Link href={`/services#language-services`} color="teal.300" fontWeight="bold" fontSize="lg">
                    {content.servicesList[4]}
                  </Link>
                </li>
                <li>
                  <Link href={`/services#china-consulting`} color="teal.300" fontWeight="bold" fontSize="lg">
                    {content.servicesList[5]}
                  </Link>
                </li>
                <li>
                  <Link href={`/services#china-consulting`} color="teal.300" fontWeight="bold" fontSize="lg">
                    {content.servicesList[6]}
                  </Link>
                </li>
              </ul>
            </VStack>
            <Text fontSize="lg" mt={4}>{content.footer}</Text>
            <Text fontSize="lg" mt={2}>{content.additionalInfo}</Text>
          </Box>

        </Flex>
      </Box >

      {/* Service Details Section */}
      <Box py={16} px={20} mx={20} bg="gray.50">
        <Flex
          direction={{ base: 'column', md: 'row' }} // Stacks on small screens, rows on larger screens
          justify="space-between"
          wrap="wrap" // Ensures the boxes wrap if there is not enough space
          spacing={8} // Adds space between the boxes
          mx="auto"
        >
          <Box className="service-box">
            <Heading as="h3" size="lg" mb={4}>
              Translation Services
            </Heading>
            <Text>
              Professional translation services for documents, websites, and more. We support
              a wide range of languages.
            </Text>
          </Box>
          <Box className="service-box">
            <Heading as="h3" size="lg" mb={4}>
              Interpretation Services
            </Heading>
            <Text>
              Expert interpretation services for meetings, conferences, and events, ensuring
              clear communication across language barriers.
            </Text>
          </Box>
          <Box className="service-box">
            <Heading as="h3" size="lg" mb={4}>
              Language Services
            </Heading>
            <Text>
              Comprehensive language services, including editing, proofreading, and localization.
              We ensure your content is linguistically and culturally accurate.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Form Section */}
      <Box py={16} px={6} bg="gray.50">
        <ContactForm language={language} />
      </Box>

      {/* Language Selector */}
      < Box px={6} textAlign="center" >
        <Select value={language} onChange={(e) => setLanguage(e.target.value)} width="200px" mx="auto">
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          {/* Add other language options as needed */}
        </Select>
      </Box >

    </Layout >
  );
};

export default IndexPage;
