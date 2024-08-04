import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="container">
        <h1 className="mt-4">About Us</h1>
        <p>Learn more about our e-commerce website.</p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
