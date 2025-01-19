import React, { useState } from 'react';
import { ResultsService } from '../services/ResultsService';
import './results.css';

const Results: React.FC = () => {
  const [uid, setUid] = useState<string>('');
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchResults = async () => {
    try {
      const data = await ResultsService.getResults(uid);
      setResultMessage(data.message);
      setErrorMessage(null);
    } catch (error: any) {
      console.error('Error fetching results', error);
      setErrorMessage(error.response?.data?.message || 'Failed to fetch results.');
      setResultMessage(null);
    }
  };

  return (
    <div className="container">
      <h2>Results</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchResults();
        }}
      >
        <div className="form-group">
          <label htmlFor="uid">Enter ID:</label>
          <input
            type="text"
            className="form-control"
            id="uid"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Results
        </button>
      </form>
      <p className="lead my-4">
        <small>Remember that draws are held every Saturday at 12:00 pm.</small>
      </p>
      {resultMessage && <p className="alert alert-success mt-3">{resultMessage}</p>}
      {errorMessage && <p className="alert alert-danger mt-3">{errorMessage}</p>}
    </div>
  );
};

export default Results;
