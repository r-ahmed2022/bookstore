import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

export default function BooksList() {
  const { books } = useSelector((state) => state.bookList);
  const booklist = books.map((book) => <Book key={book.id} {...book} />);
  return (
    <div>
      {booklist}
      <AddBook />
    </div>
  );
}
