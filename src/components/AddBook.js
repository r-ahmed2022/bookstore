import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK } from '../redux/books/books';

export default function AddBook() {
  const { books } = useSelector((state) => state.bookList);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...books,
      id: uuidv4(),
      title: e.target[0].value,
      author: e.target[1].value,
    };
    dispatch(ADD_BOOK(newBook));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  };
  return (
    <form
      className="addbook-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        maxLength={20}
        id="title"
        name="title"
        placeholder="Book title"
        required
      />

      <input
        type="text"
        maxLength={20}
        id="author"
        placeholder="Author name"
        required
        name="author"
      />

      <button className="add-btn" type="submit">
        Add Book
      </button>
    </form>
  );
}
