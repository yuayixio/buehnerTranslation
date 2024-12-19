import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';  // Import ContactForm

const ContactPage = () => {
    const [language] = useState('en');  // Default language is English

    return (
        <Layout>
            <Box
                minHeight="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="gray.50"
                p={4}
            >
                <ContactForm language={language} />
            </Box>
        </Layout>
    );
};

export default ContactPage;