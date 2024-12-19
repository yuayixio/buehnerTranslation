// src/pages/prices.js
import React, { useState } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { pricesContent } from '../content/prices-content'

const PricesPage = () => {

    const [language] = useState('en');
    const content = pricesContent[language];

    return (
        <Layout>
            {/* Hero Section */}
            <Box
                position="relative"
                height="80vh"
                bgImage="/images/background-images.jpg"
                bgSize="cover"
                bgPosition="center"
                id="hero-section"
            >
                <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    height="100%"
                    px={8}
                    bg="rgba(0, 0, 0, 0.4)" // Dark overlay to make text readable
                >
                    <Box textAlign="center" color="white" zIndex="1">
                        <Heading as="h1" size="2xl" mb={4}>
                            {content.heroTitle}
                        </Heading>
                        <Text fontSize="lg">{content.heroSubtitle}</Text>
                    </Box>
                </Flex>
            </Box>

            {/* Price Sections */}
            <Box id="prices" py={16} px={20}>
                <Heading as="h2" size="xl" mb={8} textAlign="center">
                    {content.translationServicesTitle}
                </Heading>

                {/* Price Sections: Translating and other services */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={20}>
                    <Box flex="1" px={{ base: 4, lg: 8 }} display="flex" flexDirection="column" justifyContent="center">
                        <Heading as="h3" size="lg" mb={4} textAlign="center">
                            {content.pricingInformationTitle}
                        </Heading>
                        <ul style={{ padding: 0 }}>
                            <li>
                                <Text fontSize="lg" mb={4}>
                                    {content.translationPricingText}
                                </Text>
                            </li>
                            <li>
                                <Text fontSize="lg" mb={4}>
                                    {content.customProjectPricingText}
                                </Text>
                            </li>
                            <li>
                                <Text fontSize="lg" mb={4}>
                                    {content.documentCertificationText}
                                </Text>
                            </li>
                            <li>
                                <Text fontSize="lg" mb={4}>
                                    {content.minimumOrderFeeText}
                                </Text>
                            </li>
                            <li>
                                <Text fontSize="lg" mb={4}>
                                    {content.inquiryText}
                                </Text>
                            </li>
                        </ul>

                    </Box>
                    <Box flex="1">
                        <img
                            src="/images/technical-translation2.jpg" // Update to an appropriate image
                            alt={content.translationService1Title}
                            style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Flex>


                {/* Services for Interpretation, Language, and Culture */}
                <Box py={16} px={20} mt={16}>
                    <Heading as="h2" size="xl" mb={8} textAlign="center">
                        {content.interpretationLanguageServicesTitle}
                    </Heading>
                    <Text fontSize="lg" mb={4}>
                        {content.interpretationPricingText}
                    </Text>
                    <Text fontSize="lg" textAlign="center">
                        <strong>{content.getInTouchText}</strong>
                    </Text>
                </Box>

                {/* Contact Form Section */}
                <Box py={16} px={20} mt={16} bg="gray.100" borderRadius="md">
                    <Heading as="h2" size="xl" mb={8} textAlign="center">
                        {content.contactFormTitle}
                    </Heading>
                    <ContactForm language={language} />
                </Box>
            </Box>
        </Layout>
    );
};

export default PricesPage;
