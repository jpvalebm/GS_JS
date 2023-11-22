import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="header">
      {
      }
      <h1>MedmonTech</h1>
      {user && (
        <button onClick={handleLogout}>Sair</button>
      )}
      {}
    </header>
  );
};

export default Header;
