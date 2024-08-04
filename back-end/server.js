// back-end/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes 
const signup_route = require('./router/signup_route');
const login_route = require('./router/login_route');
const product_route = require('./router/product_route');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string
const Connection_String = 'mongodb://localhost:27017/zonemart-db';
mongoose.connect(Connection_String)
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/signup_route', signup_route);
app.use('/api/login_route', login_route);
app.use('/api/product_route', product_route);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
