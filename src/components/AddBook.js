import React from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  // const bookList = useSelector((state) => state.books);
  return (
    <form className="addbook-form" onSubmit={() => dispatch(addBook)}>
      <input
        type="text"
        maxLength={20}
        id="addbook"
        placeholder="Book title"
        required
      />

      <input
        type="text"
        maxLength={20}
        id="author-input"
        placeholder="Author name"
        required
      />

      <button className="add-btn" type="submit">
        Add Book
      </button>
    </form>
  );
}
