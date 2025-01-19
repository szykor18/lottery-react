import React from 'react';

const Error: React.FC = () => {
  const errorMessage = 'Error occurred! Contact support and...';

  return (
    <div className="container text-center my-5">
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </div>
  );
};

export default Error;
