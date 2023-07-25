import React, { useState } from 'react';
import authService from '../../services/auth';
import { useNavigate } from 'react-router-dom'
import './Register.css'; 

const Register = () => {
  const navigate = useNavigate()

  const [registered,setRegistered] = useState('not registered')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the register function from the authService to perform registration
    authService.register(formData)
      .then((response) => {
        console.log('Registration successful:', response);
        navigate('/login')
      })
      .catch((error) => {
      
        console.error('Registration error:', error);
        setRegistered(null)
      });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {!registered && <p className='error-message'>unable to register user already exist</p>}
      <form onSubmit={handleSubmit}>
        <div className={"form-group"}>
          <label htmlFor="name">Name</label>
          <input
            className={!registered && 'error'}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={"form-group"}>
          <label htmlFor="email">Email</label>
          <input
            className={!registered && 'error'}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className={!registered && 'error'}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Register;
