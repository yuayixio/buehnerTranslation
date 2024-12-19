import React, { useState } from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { servicesContent } from '../content/services-content';


const ServicesPage = () => {

    const [language] = useState('en');
    const content = servicesContent[language];


    return (
        <Layout>
            {/* Hero Section */}
            <Box
                position="relative"
                height="80vh"
                bgImage="/images/background-image.jpg"
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

            <Box id="translations" py={16} px={20} mb={0}>
                <Heading as="h2" size="xl" mb={8} textAlign='center'>
                    {content.translationSection.title}
                </Heading>

                {/* Technical Translations */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={20}>
                    <Box
                        flex="1"
                        px={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pr={10}>
                            {content.translationSection.technical}
                        </Heading>
                        <Text pr={10}>{content.translationSection.technicalDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image
                            src="/images/technical-translation.jpg"
                            alt="Technical Translations"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                </Flex>

                {/* Certified Translations */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={20}>
                    <Box flex="1">
                        <Image
                            src="/images/certified-translation.jpg"
                            alt="Certified Translations"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                    <Box
                        flex="1"
                        px={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pl={10}>
                            {content.translationSection.certified}
                        </Heading>
                        <Text pl={10}>{content.translationSection.certifiedDescription}</Text>
                    </Box>
                </Flex>

                {/* General Translations */}
                <Flex direction={{ base: 'column', lg: 'row' }} >
                    <Box
                        flex="1"
                        px={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pr={10}>
                            {content.translationSection.general}
                        </Heading>
                        <Text pr={10}>{content.translationSection.generalDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image
                            src="/images/general-translation.jpg"
                            alt="General Translations"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                </Flex>
            </Box>

            {/* Interpretation Section */}
            <Box id="interpretation" py={16} px={20} bg="gray.50" mb={4}>
                <Heading as="h2" size="xl" mb={8} textAlign="center">
                    {content.interpretationSection.title}
                </Heading>

                {/* Dialogue Interpreting */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={4}>
                    <Box flex="1">
                        <Image
                            src="/images/language-interpreter.jpg"
                            alt="Dialogue Interpreting"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                    <Box
                        flex="1"
                        px={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pl={10}>
                            {content.interpretationSection.subtitle}
                        </Heading>
                        <Text pl={10}>{content.interpretationSection.description}</Text>
                    </Box>
                </Flex>
            </Box>

            {/* Language Services Section */}
            <Box id="language-services" py={16} px={20} mb={4}>
                <Heading as="h2" size="xl" mb={8} textAlign="center">
                    {content.languageServicesSection.title}
                </Heading>

                {/* Editing */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={20}>
                    <Box
                        flex="1"
                        px={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pr={10}>
                            {content.languageServicesSection.editing}
                        </Heading>
                        <Text pr={10}>{content.languageServicesSection.editingDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image
                            src="/images/language-editing.jpg"
                            alt="Editing"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                </Flex>

                {/* Language Training */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={4}>
                    <Box flex="1">
                        <Image
                            src="/images/language-training.jpg"
                            alt="Language Training"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                    <Box
                        flex="1"
                        px={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pl={10}>
                            {content.languageServicesSection.languageTraining}
                        </Heading>
                        <Text pl={10}>{content.languageServicesSection.languageTrainingDescription}</Text>
                    </Box>
                </Flex>
            </Box>

            {/* China Consulting Section */}
            <Box id="china-consulting" py={16} px={20} bg="gray.50" mb={4}>
                <Heading as="h2" size="xl" mb={8} textAlign="center">
                    {content.chinaConsultingSection.title}
                </Heading>

                {/* Delegation Support */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={20}>
                    <Box
                        flex="1"
                        px={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pr={10}>
                            {content.chinaConsultingSection.delegationSupport}
                        </Heading>
                        <Text pr={10}>{content.chinaConsultingSection.delegationSupportDescription}</Text>
                    </Box>
                    <Box flex="1">
                        <Image
                            src="/images/delegation-support.jpg"
                            alt="Delegation Support"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                </Flex>

                {/* Cross-Cultural Consulting */}
                <Flex direction={{ base: 'column', lg: 'row' }} mb={4}>
                    <Box flex="1">
                        <Image
                            src="/images/culture-training.jpg"
                            alt="Cross-Cultural Consulting"
                            borderRadius="md" // Rounded edges
                            boxSize="100%"  // Same size for all images
                            objectFit="cover"
                            height="40vh"
                        />
                    </Box>
                    <Box
                        flex="1"
                        pr={{ base: 4, lg: 8 }}
                        display={{ base: 'block', lg: 'flex' }}
                        flexDirection="column"
                        justifyContent={{ base: 'flex-start', lg: 'center' }}
                    >
                        <Heading as="h3" size="lg" mb={4} textAlign="center" pl={10}>
                            {content.chinaConsultingSection.crossCultural}
                        </Heading>
                        <Text pl={10}>{content.chinaConsultingSection.crossCulturalDescription}</Text>
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
                        <Image src="/images/martina.jpg" alt="Our Team" />
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