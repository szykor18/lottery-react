import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_API || '';

export const GameService = {
  inputNumbers: async (numbers: (number | null)[]) => {
    const token = localStorage.getItem('currentUserToken');
    const response = await axios.post(
      `${API_URL}/inputNumbers`,
      { inputNumbers: numbers },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};
