const express = require('express');
const Registration = require('../models/Registration');
const router = express.Router();

// Route to add a new registration
router.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all registrations for a specific event
router.get('/event/:eventId', async (req, res) => {
  try {
    const registrations = await Registration.find({ eventId: req.params.eventId });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
