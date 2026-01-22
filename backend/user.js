const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Nu permite doi utilizatori cu același email
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Securitate minimă
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Putem adăuga un câmp pentru a vedea ultima dată când a fost activ (pentru statistici)
  lastActive: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
