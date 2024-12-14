import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, Select, Heading, Text } from '@chakra-ui/react';
import { contactForm } from '../content/contact-content'; // Import translations

const ContactForm = ({ language }) => {
    const content = contactForm[language];

    // Define form state
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        street: '',
        postalCity: '',
        country: '',
        phone: '',
        email: '',
        description: '',
        sourceLanguage: '',
        targetLanguage: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to API or display confirmation)
        console.log(formData);
    };

    return (
        <Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="600px" mx="auto" bg="white" p={6} borderRadius="md" boxShadow="lg">

            {/* Form Header */}
            <Box mb={6}>
                <Heading as="h2" size="lg" textAlign="center" mb={4}>
                    {content.formHeader}
                </Heading>
            </Box>

            <FormControl id="company" mb={4}>
                <FormLabel>{content.company}</FormLabel>
                <Input type="text" name="company" value={formData.company} onChange={handleChange} />
            </FormControl>

            <FormControl id="name" mb={4}>
                <FormLabel>{content.name}</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </FormControl>

            <FormControl id="street" mb={4}>
                <FormLabel>{content.street}</FormLabel>
                <Input type="text" name="street" value={formData.street} onChange={handleChange} required />
            </FormControl>

            <FormControl id="postalCity" mb={4}>
                <FormLabel>{content.postalCity}</FormLabel>
                <Input type="text" name="postalCity" value={formData.postalCity} onChange={handleChange} required />
            </FormControl>

            <FormControl id="country" mb={4}>
                <FormLabel>{content.country}</FormLabel>
                <Input type="text" name="country" value={formData.country} onChange={handleChange} />
            </FormControl>

            <FormControl id="phone" mb={4}>
                <FormLabel>{content.phone}</FormLabel>
                <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </FormControl>

            <FormControl id="email" mb={4}>
                <FormLabel>{content.email}</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </FormControl>

            <FormControl id="description" mb={4}>
                <FormLabel>{content.description}</FormLabel>
                <Textarea name="description" value={formData.description} onChange={handleChange} required />
            </FormControl>

            <FormControl id="sourceLanguage" mb={4}>
                <FormLabel>{content.sourceLanguage}</FormLabel>
                <Select name="sourceLanguage" value={formData.sourceLanguage} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                    <option value="zh">中文</option>
                </Select>
            </FormControl>

            <FormControl id="targetLanguage" mb={4}>
                <FormLabel>{content.targetLanguage}</FormLabel>
                <Select name="targetLanguage" value={formData.targetLanguage} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                    <option value="zh">中文</option>
                </Select>
            </FormControl>

            <Button type="submit" colorScheme="teal" width="full" mt={6}>
                {content.submit}
            </Button>
        </Box>
    );
};

export default ContactForm;
