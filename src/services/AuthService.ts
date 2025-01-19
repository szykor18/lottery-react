import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_API || '';

export interface User {
  username: string;
  password: string;
}

const login = async (username: string, password: string): Promise<string> => {
  const response = await axios.post<{ token: string }>(`${API_URL}/token`, { username, password });
  const token = response.data.token;
  if (token) {
    localStorage.setItem('currentUserToken', token);
  }
  return token;
};

const register = async (user: User): Promise<void> => {
  await axios.post(`${API_URL}/register`, user);
};

const logout = (): void => {
  localStorage.removeItem('currentUserToken');
};

const isLoggedIn = (): boolean => {
  return Boolean(localStorage.getItem('currentUserToken'));
};

export const AuthService = { login, register, logout, isLoggedIn };
