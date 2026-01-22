import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {
  // Verificăm dacă utilizatorul este logat (are un token în browser)
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 1. Pagina de Login/Register */}
          <Route path="/" element={<Auth />} />

          {/* 2. Pagina de Dashboard (Protejată) */}
          {/* Dacă nu e logat, îl trimitem înapoi la Login */}
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
          />

          {/* 3. Redirecționare pentru orice altă adresă greșită */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
