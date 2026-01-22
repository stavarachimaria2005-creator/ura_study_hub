import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

// Putem adăuga și o pagină de Login simplă mai târziu
const LoginPlaceholder = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>Autentificare</h2>
    <p>Aceasta este o simulare. Apasă pe buton pentru a intra în Dashboard.</p>
    <button onClick={() => window.location.href='/dashboard'}>Intră ca Student URA</button>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigația principală */}
        <Routes>
          {/* Pagina de pornire va fi Login-ul */}
          <Route path="/" element={<LoginPlaceholder />} />
          
          {/* Pagina principală de analiză știri */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Redirecționare în caz de pagină inexistentă */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
