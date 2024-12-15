import React, { useState } from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { servicesContent } from '../content/services-content';  // Import services content


const ServicesPage = () => {

    const [language] = useState('en');
    const content = servicesContent[language];  // Dynamically select content based on language


    return (
        <Layout>
            {/* Hero Section */}
            <Box
                position="relative"
                height="80vh"
                bgImage="images/background-image.jpg"
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
                    bg="rgba(0, 0, 0, 0.4)"
                >
                    <Box textAlign="center" color="white" zIndex="1">
                        <Heading as="h1" size="2xl" mb={4}>
                            {content.heroTitle}
                        </Heading>
                        <Text fontSize="lg">{content.heroDescription}</Text>
                    </Box>
                </Flex>
            </Box>

            {/* Translations Section */}
            <Box id="translations" py={16} px={20}>
                <Heading as="h2" size="xl" mb={8}>
                    {content.translationSection.title}
                </Heading>

                {/* Technical Translations */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.translationSection.technical}
                        </Heading>
                        <Text>{content.translationSection.technicalDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/technical-translation.jpg" alt="Technical Translations" />
                    </Box>
                </Flex>

                {/* Certified Translations */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.translationSection.certified}
                        </Heading>
                        <Text>{content.translationSection.certifiedDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/certified-translation.jpg" alt="Certified Translations" />
                    </Box>
                </Flex>

                {/* General Translations */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.translationSection.general}
                        </Heading>
                        <Text>{content.translationSection.generalDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/general-translation.jpg" alt="General Translations" />
                    </Box>
                </Flex>
            </Box>

            {/* Interpretation Section */}
            <Box id="interpretation" py={16} px={20} bg="gray.50">
                <Heading as="h2" size="xl" mb={8}>
                    {content.interpretationSection.title}
                </Heading>

                {/* Dialogue Interpreting */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.interpretationSection.dialogue}
                        </Heading>
                        <Text>{content.interpretationSection.dialogueDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/dialogue-interpreting.jpg" alt="Dialogue Interpreting" />
                    </Box>
                </Flex>
            </Box>

            {/* Language Services Section */}
            <Box id="language-services" py={16} px={20}>
                <Heading as="h2" size="xl" mb={8}>
                    {content.languageServicesSection.title}
                </Heading>

                {/* Editing */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.languageServicesSection.editing}
                        </Heading>
                        <Text>{content.languageServicesSection.editingDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/editing.jpg" alt="Editing" />
                    </Box>
                </Flex>

                {/* Language Training */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.languageServicesSection.training}
                        </Heading>
                        <Text>{content.languageServicesSection.trainingDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/language-training.jpg" alt="Language Training" />
                    </Box>
                </Flex>
            </Box>

            {/* China Consulting Section */}
            <Box id="china-consulting" py={16} px={20} bg="gray.50">
                <Heading as="h2" size="xl" mb={8}>
                    {content.chinaConsultingSection.title}
                </Heading>

                {/* Delegation Support */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.chinaConsultingSection.delegation}
                        </Heading>
                        <Text>{content.chinaConsultingSection.delegationDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/delegation-support.jpg" alt="Delegation Support" />
                    </Box>
                </Flex>

                {/* Cross-Cultural Consulting */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={8}>
                    <Box flex="1">
                        <Heading as="h3" size="lg" mb={4}>
                            {content.chinaConsultingSection.crossCultural}
                        </Heading>
                        <Text>{content.chinaConsultingSection.crossCulturalDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image src="images/cross-cultural.jpg" alt="Cross-Cultural Consulting" />
                    </Box>
                </Flex>
            </Box>

            {/* About Us Section */}
            <Box id="about-us" py={16} px={20}>
                <Heading as="h2" size="xl" mb={8}>
                    {content.aboutUsSection.title}
                </Heading>
                <Flex direction={{ base: 'column', lg: 'row' }} align="center">
                    <Box flex="1" mb={{ base: 6, lg: 0 }}>
                        <Image src="images/martina.jpg" alt="Our Team" />
                    </Box>
                    <Box flex="2">
                        <Text fontSize="lg" mb={4}>
                            {content.aboutUsSection.description}
                        </Text>
                        <Text fontSize="lg">
                            {content.aboutUsSection.additionalInfo}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Layout>
    );
};

export default ServicesPage;