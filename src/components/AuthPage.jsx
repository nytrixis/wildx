import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = ({ mode, onClose }) => {
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(isLogin ? 'Logged in successfully' : 'Signed up successfully', data);
        onClose();
      } else {
        const errorData = await response.json();
        console.error('Authentication error:', errorData.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-overlay" onClick={onClose}></div>
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Login'}
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
