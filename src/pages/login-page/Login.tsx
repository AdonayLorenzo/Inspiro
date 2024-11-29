import React, { useState } from 'react';
import './Login.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import users from '../../data/users.json'; // Importa el JSON de usuarios

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Busca el usuario en el JSON
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setError('');
      alert('Login successful!'); // Reemplaza esto con la lógica de redirección
    } else {
      setError('Incorrect e-mail or password');
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {error && <p className="error-message">{error}</p>}
          <label htmlFor="email">E-Mail</label>
          <input
            className='input-login'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className='input-login'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Log-In</button>
        </form>
        <p>
          Don’t have an account? <a href="/register">Register now</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
