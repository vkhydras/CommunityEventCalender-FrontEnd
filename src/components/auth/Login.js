import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/auth';
import './Login.css'; 

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState(null);

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authService.login(formData, onLogin);
      navigate('/calendar');
    } catch (error) {
      console.log('Login error:', error);
      setLoginError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="container"> 
      <h2>Login</h2>
      {loginError && <p className="error-message">{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label>Email:</label>
          <input
            className={loginError && 'error'}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group"> 
          <label>Password:</label>
          <input
            className={loginError && 'error'}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
