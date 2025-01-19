import React, { useState } from 'react';
import { GameService } from '../services/GameService';
import './play.css';

const Play: React.FC = () => {
  const [numbers, setNumbers] = useState<(number | null)[]>(Array(6).fill(null));
  const [ticket, setTicket] = useState<any>(null);
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (index: number, value: string) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value ? parseInt(value) : null;
    setNumbers(newNumbers);
  };

  const submitNumbers = async () => {
    try {
      const response = await GameService.inputNumbers(numbers);
      setTicket(response.ticketDto);
      setMessage(response.message);
    } catch (error) {
      console.error('Error submitting numbers', error);
      setMessage('Failed to submit numbers. Please try again.');
    }
  };

  const generateRandomNumbers = () => {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < 6) {
      const num = Math.floor(Math.random() * 99) + 1;
      if (!randomNumbers.includes(num)) {
        randomNumbers.push(num);
      }
    }
    setNumbers(randomNumbers);
  };

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <h2>Play the Game</h2>
        <form className="w-50" onSubmit={(e) => e.preventDefault()}>
          <div className="row justify-content-center mb-3">
            {numbers.map((num, index) => (
              <div className="col-2" key={index}>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  value={num || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  min="1"
                  max="99"
                  required
                />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={generateRandomNumbers}
            >
              Random Numbers
            </button>
            <button type="button" className="btn btn-primary" onClick={submitNumbers}>
              Submit
            </button>
          </div>
          <p className="lead my-4 text-center">
            <small>Make sure to enter six distinct numbers.</small>
          </p>
        </form>
        {ticket && (
          <div className="mt-3 text-center">
            <h3>Ticket Information</h3>
            <p>ID: {ticket.hash}</p>
            <p>Draw Date: {ticket.drawDate}</p>
            <p>Numbers: {ticket.numbersFromUser.join(', ')}</p>
          </div>
        )}
        {message && (
          <div className="mt-3">
            {message === 'SUCCESS' ? (
              <p className="alert alert-success text-center">{message}</p>
            ) : (
              <p className="alert alert-danger">{message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Play;

