//front-end/src/pages/signup.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import Header from '../components/header';
import Footer from '../components/footer';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Added to capture name
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/signup_route', { name, email, password });
      const { data } = response; // Access the response data

      // Show SweetAlert on successful registration
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: data.message || 'You have successfully registered!',
      });

      // Example: Display a user-specific message or handle additional data
      setSuccess(data.message || 'Registration successful!');
      setError('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError('No response received from server.');
      } else {
        setError('Error: ' + error.message);
      }
      setSuccess('');
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} /> {/* Added name input field */}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
            <div className="card-footer">
              <div className="text-center">
                Already have an account? <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
