const express = require('express');
const UserRoutes = require('./routes/UserRoutes');
const InterestRoutes = require('./routes/InterestRoutes');
const connectDB = require('./config/db');
const colors = require('colors');

// Initialize server
const app = express();
connectDB();

//Express middleware to access req.body
app.use(express.json());

//Post route
app.use('/api/v1', UserRoutes);
app.use('/api/v1', InterestRoutes);

app.listen(5000, console.log('Server started'.cyan.bold));

