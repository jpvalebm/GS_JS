import React from 'react';
import { useNavigate } from 'react-router-dom';

const SomeChildComponent = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); 
  };

  const goToLogin = () => {
    navigate('/login'); 
  };


  return (
    <div>
      <h1>Algum Componente Filho</h1>
      <button onClick={goToHomePage}>Ir para Home</button>
      <button onClick={goToLogin}>Ir para Login</button>
    </div>
  );
};

export default SomeChildComponent;
