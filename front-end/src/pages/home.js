import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="container">
        <h1 className="mt-4">Welcome to our e-commerce website!</h1>
        <p>Here you can find a wide range of products to suit your needs.</p>
        <Link to="/product" className="btn btn-primary">Shop Now</Link>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
