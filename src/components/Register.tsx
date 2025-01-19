import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService, User } from '../services/AuthService';
import './login-register.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User = { username, password };
    try {
      await AuthService.register(user);
      navigate('/login');
    } catch (error: any) {
      setErrorMessage(error.message || 'Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Register;
