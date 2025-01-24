import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Play from './components/play/Play';
import Results from './components/results/Result';
import MainPage from './components/main/MainPage';
import ErrorPage from './components/errors/Error';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <div id="root">
      <Router>
        <Navbar />
        <div id="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/play" element={<Play />} />
            <Route path="/results" element={<Results />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
