const express = require('express');
const connectDB = require('./database');
const eventRoutes = require('./Routes/eventRoutes');
const registrationRoutes = require('./Routes/registrationRoutes');
const authRoutes = require('./Routes/authRoutes');

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Connect to MongoDB
connectDB();

// Mount routes
app.use('/api/events', eventRoutes);          // Routes for event management
app.use('/api/registrations', registrationRoutes); // Routes for registration management
app.use('/api/auth', authRoutes);             // Routes for authentication (signup, login)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
