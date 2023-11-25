import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.scss'; 

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users?email=' + encodeURIComponent(email));
      const [user] = await response.json();
      if (user && user.senha === password) {
        const { senha, ...userData } = user;
        onLoginSuccess(userData);
        navigate('/');
      } else {
        alert('Credenciais inválidas!');
      }
    } catch (error) {
      console.error('Erro ao realizar o login:', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>
          Login:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
