const { GoogleGenerativeAI } = require("@google/generative-ai");

// Inițializăm accesul la Google AI folosind cheia din fișierul .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Trimite conținutul articolului către Gemini pentru analiză
 * @param {string} articleContent - Textul brut extras prin scraping
 * @returns {Object} - Analiza structurată (Topics, Sentiment, Summary)
 */
async function analyzeArticleWithAI(articleContent) {
  try {
    // Alegem modelul (Flash este cel mai rapid și eficient pentru rezumate)
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || "gemini-1.5-flash" });

    const prompt = `
      Ești un analist media expert. Analizează următorul conținut de știri și returnează un obiect JSON cu următoarele câmpuri:
      1. "topics": o listă de maxim 5 cuvinte cheie.
      2. "sentiment": alege între "Pozitiv", "Negativ" sau "Neutru".
      3. "summary": un rezumat de maxim 3 fraze.
      4. "perspectives": o scurtă explicație despre posibilele părtiniri ale autorului.

      Textul știrii:
      ${articleContent}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Încercăm să curățăm și să parsăm răspunsul ca JSON pentru a fi ușor de salvat în DB
    // Notă: În producție, vom folosi o logică de filtrare mai avansată pentru a asigura formatul JSON
    return text; 
  } catch (error) {
    console.error("Eroare la apelul Gemini API:", error);
    throw new Error("Analiza AI a eșuat.");
  }
}

module.exports = { analyzeArticleWithAI };
