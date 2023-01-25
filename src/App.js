import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LIST_DATA } from './redux/books/books';
import Navbar from './components/Navbar';
import Books from './components/BooksList';
import Categories from './components/Categories';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LIST_DATA());
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
