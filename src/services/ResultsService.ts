import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_API || '';

export const ResultsService = {
  getResults: async (id: string) => {
    const token = localStorage.getItem('currentUserToken');
    const response = await axios.get(`${API_URL}/results/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
