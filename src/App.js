import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/BooksList';
import Categories from './components/Categories';
import './App.css';
import { LIST_BOOKS } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LIST_BOOKS());
  }, [dispatch]);
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Books />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
