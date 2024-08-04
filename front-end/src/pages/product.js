// front-end/src/pages/product.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

function Product() {
  const [products, setProducts] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Extract user name from query parameters
    const params = new URLSearchParams(location.search);
    const userName = params.get('name');

    if (userName) {
      setWelcomeMessage(`Welcome, ${userName}!`);
    }

    // Fetch products
    axios.get('http://localhost:5000/api/product_route')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [location.search]);

  return (
    <div className="container">
      <Header />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Products</div>
            <div className="card-body">
              {welcomeMessage && <h2>{welcomeMessage}</h2>}
              <div className="row">
                {products.map(product => (
                  <div key={product._id} className="col-md-4 mb-3">
                    <div className="card">
                      <img src={product.image} className="card-img-top" alt={product.name} />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text"><strong>${product.price}</strong></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
