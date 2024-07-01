import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Favorites from './pages/Favorites';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
