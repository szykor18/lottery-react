import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import './navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <a className="navbar-brand" href="/main">
            Lottery
          </a>
        </div>

        <ul className="navbar-nav">
          {AuthService.isLoggedIn() && (
            <>
              <li>
                <Link to="/main" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/play" className="nav-link">
                  Play
                </Link>
              </li>
              <li>
                <Link to="/results" className="nav-link">
                  Results
                </Link>
              </li>
            </>
          )}
        </ul>

        <ul className="navbar-nav navbar-collapse justify-content-end">
          {!AuthService.isLoggedIn() ? (
            <>
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout} className="nav-link btn btn-link">
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
