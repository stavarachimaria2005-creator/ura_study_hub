import React, { useState } from 'react';
import { analyzeNewsArticle } from '../api';

const Dashboard = () => {
  const [url, setUrl] = useState('');
  const [projectName, setProjectName] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Pentru demo, folosim un ID de utilizator simulat (în Milestone 3 îl vom lua din Login)
      const mockUserId = "65ae12345678901234567890"; 
      const data = await analyzeNewsArticle(url, projectName, mockUserId);
      setResult(data.articles[0].analysis);
    } catch (err) {
      setError('A apărut o eroare la analizarea știrii. Verifică link-ul sau cheia API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>📊 News Analyser Dashboard</h1>
      <p>Introdu link-ul unui articol pentru a extrage esența acestuia folosind AI.</p>

      <form onSubmit={handleAnalyze} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Nume Proiect (ex: Alegeri 2024)" 
          value={projectName} 
          onChange={(e) => setProjectName(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input 
          type="url" 
          placeholder="https://www.digi24.ro/stire..." 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          {loading ? '⏳ Se analizează...' : '🚀 Lansează Analiza Gemini'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h2>🔍 Rezultatele Analizei</h2>
          <p><strong>🏷️ Subiecte:</strong> {Array.isArray(result.topics) ? result.topics.join(', ') : result.topics}</p>
          <p><strong>🎭 Sentiment:</strong> {result.sentiment}</p>
          <hr />
          <p><strong>📝 Rezumat AI:</strong> {result.summary}</p>
          <p><strong>⚖️ Perspectivă/Bias:</strong> {result.perspectives}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
