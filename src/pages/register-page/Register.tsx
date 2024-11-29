import React, { useState } from 'react';
import './Register.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import users from '../../data/users.json'; // Importa el JSON de usuarios

const Register: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = () => {
    // Validación del nickname
    const nicknameExists = users.some((user) => user.nickname === nickname);

    if (nicknameExists) {
      setError('Nickname already on use');
      setSuccess('');
      return;
    }

    // Validación del email
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      setError('E-Mail already registered');
      setSuccess('');
      return;
    }

    // Validación de campos vacíos
    if (!nickname || !day || !month || !year || !email || !password) {
      setError('All fields are required');
      setSuccess('');
      return;
    }

    // Registro exitoso (aquí podrías enviar los datos a una API o guardarlos en tu backend)
    const newUser = { nickname, email, password };
    console.log('New User Registered:', newUser);

    // Limpia los campos y muestra un mensaje de éxito
    setError('');
    setSuccess('Registration successful!');
    setNickname('');
    setDay('');
    setMonth('');
    setYear('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="register-page">
      <Header />
      <div className="register-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <label>Born Date</label>
          <div className="born-date">
            <input
              type="text"
              placeholder="Day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <input
              type="text"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="register-button">Register</button>
        </form>
        <p>
          Don’t have an account? <a href="/login">Log-In now</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
