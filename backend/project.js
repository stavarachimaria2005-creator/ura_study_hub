const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  // Legătura cu utilizatorul care a creat proiectul
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  projectName: {
    type: String,
    required: true,
    trim: true
  },
  // Putem salva mai multe articole într-un singur proiect de analiză
  articles: [
    {
      url: String,
      title: String,
      content: String, // Textul extras prin scraping
      analysis: {
        topics: [String],         // Subiecte extrase de Gemini
        sentiment: String,        // Pozitiv/Negativ/Neutru
        perspectives: String,     // Comparația făcută de AI
        summary: String           // Rezumatul generat
      },
      analyzedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
