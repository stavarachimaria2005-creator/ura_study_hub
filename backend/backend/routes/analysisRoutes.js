const express = require('express');
const router = express.Router();
const { scrapeArticle } = require('../services/scraperService');
const { analyzeArticleWithAI } = require('../services/geminiService');
const Project = require('../models/Project');

// RUTA: POST /api/analyze
// Aceasta este ruta pe care o va apela butonul "Analizează" din React
router.post('/analyze', async (req, res) => {
  try {
    const { url, projectName, userId } = req.body;

    // 1. Extragere conținut (Scraping)
    const scrapedData = await scrapeArticle(url);

    // 2. Analiză cu Inteligență Artificială (Gemini)
    const aiAnalysis = await analyzeArticleWithAI(scrapedData.content);

    // 3. Salvare în Baza de Date (MongoDB)
    const newProject = new Project({
      user: userId,
      projectName: projectName,
      articles: [{
        url: url,
        title: scrapedData.title,
        content: scrapedData.content,
        analysis: aiAnalysis // Salvăm ce ne-a dat AI-ul
      }]
    });

    await newProject.save();

    // 4. Trimitem rezultatul înapoi la Frontend ca să-l afișeze pe ecran
    res.status(201).json(newProject);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "A apărut o eroare la procesarea știrii." });
  }
});

module.exports = router;
