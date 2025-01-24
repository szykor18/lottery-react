import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';

const MainPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // Example initialization logic
    // setErrorMessage('Some error occurred');
  }, []);

  return (
    <div className="bg-image">
      <div className="main-content text-center">
        <h1 className="display-1">Lottery Game</h1>
        <p className="lead">
          Welcome to the official Lottery Game. Experience the thrill of winning
          from the comfort of your home. Play now or check your results!
        </p>

        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="button-group">
          <Link to="/play" className="btn btn-lg btn-success">
            Play Now
          </Link>
          <Link to="/results" className="btn btn-lg btn-primary">
            Check Results
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
