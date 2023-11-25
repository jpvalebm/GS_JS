// src/App.js

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './pages/Home';
import SomeChildComponent from './components/SomeChildComponent';
import './App.scss';

const App = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <div className="app">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/alguma-rota" element={<SomeChildComponent />} />
        {
          
        }
      </Routes>
    </div>
  );
};

export default App;
