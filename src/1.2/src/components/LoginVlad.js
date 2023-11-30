import React, { useState } from 'react';
import "./LoginVlad.css"

function LoginVlad() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('./check_loginData.php', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'correct') {
          window.location.href = "/cabinet";
        } else {
          console.error('Ошибка входа')
        }
      })
      .catch(error => {
        console.error('Ошибка при проверке уникальности:', error);
      });
  };

  return (
    <div className="login-container">
      <h2>Вход</h2>
      <label htmlFor="email">Почта:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Пароль:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleLogin}>Вход</button>
      <div className="registration-container">
        <form action="registration.html">
          <input type="submit" value="Регистрация" />
        </form>
      </div>
    </div>
  );
}

export default LoginVlad;
