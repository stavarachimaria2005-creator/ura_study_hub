import axios from 'axios';

// Definim adresa de bază a serverului (cea din fișierul .env al backend-ului)
const API_URL = 'http://localhost:5001/api';

/**
 * Trimite un URL de știre către backend pentru a fi analizat de Gemini
 * @param {string} url - Link-ul știrii
 * @param {string} projectName - Numele proiectului dat de student
 * @param {string} userId - ID-ul studentului logat
 */
export const analyzeNewsArticle = async (url, projectName, userId) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, {
      url,
      projectName,
      userId
    });
    return response.data; // Returnează proiectul salvat și analiza AI
  } catch (error) {
    console.error("Eroare la comunicarea cu serverul:", error);
    throw error;
  }
};

/**
 * Funcție pentru a prelua toate proiectele salvate ale unui utilizator
 */
export const getUserProjects = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/projects/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Eroare la preluarea proiectelor:", error);
      throw error;
    }
  };
