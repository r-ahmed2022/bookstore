import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/BooksList';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="*" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
