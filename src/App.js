import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/BooksList';
import AddBook from './components/AddBook';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<AddBook />} />

      </Routes>
    </div>
  );
}

export default App;
