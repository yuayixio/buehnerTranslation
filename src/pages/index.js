// src/pages/index.js
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/global.css';

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <h1>Welcome to My Translation Services</h1>
      <p>
        Providing high-quality translation, interpretation, and consulting services.
        With years of experience and expertise in multiple languages, we ensure accurate
        and reliable translations for all your needs.
      </p>
    </section>
    <section className="services">
      <h2>Our Services</h2>
      <ul className="list">
        <li className="listItem">
          <Link to="/translation" className="listItemLink">Translation</Link>
          <p className="listItemDescription">Professional translation services for documents, websites, and more.</p>
        </li>
        <li className="listItem">
          <Link to="/interpretation" className="listItemLink">Interpretation</Link>
          <p className="listItemDescription">Expert interpretation services for meetings, conferences, and events.</p>
        </li>
        <li className="listItem">
          <Link to="/language-services" className="listItemLink">Language Services</Link>
          <p className="listItemDescription">Comprehensive language services including editing and proofreading.</p>
        </li>
        <li className="listItem">
          <Link to="/china-consulting" className="listItemLink">China Consulting</Link>
          <p className="listItemDescription">Specialized consulting services for businesses dealing with China.</p>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;