const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const bookRoutes = require('./routes/books');

const app = express();

// Debug Mongoose queries
const mongoose = require('mongoose');
mongoose.set('debug', true);

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', bookRoutes);
app.use('/api/users', require('./routes/users'));

// Health check route
app.get('/', (req, res) => res.send('API Running'));

// Port from environment variables or default to 5001
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
