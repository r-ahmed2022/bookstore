/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import bookReducer from '../redux/books/books';
import Book from './Book';
import AddBook from './AddBook';

export default function BooksList() {
  const books = useSelector((state) => state.books);
  const booklist = books.map((book) => <Book key={book.id} category={book.category} title={book.title} author={book.author} />);

  return (
    <div>
      {booklist}
      <AddBook />
    </div>
  );
}
