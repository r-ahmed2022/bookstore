/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

export default function BooksList() {
  const { books } = useSelector((state) => state.bookList);
  const dispatch = useDispatch();
  const booklist = books.map((book) => <Book key={book.id} {...book} />);
  return (
    <div>
      {booklist}
      <AddBook />
    </div>
  );
}
