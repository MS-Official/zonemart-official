import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Contact() {
  return (
    <div className="contact-page">
      <Header/>
      <main className="container">
        <h1 className="mt-4">Contact Us</h1>
        <p>Get in touch with our team.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
