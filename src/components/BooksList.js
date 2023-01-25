import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

function BooksList() {
  const { list } = useSelector((state) => state.booklist);
  if (!list) {
    return <h1>Loading books....</h1>;
  }
  const newList = Object.entries(list).map((data) => (
    <Book
      key={data[0]}
      item_id={data[0]}
      {...data[1][0]}
    />
  ));
  return (
    <div className="bookscontainer">
      { newList }
      <AddBook />
    </div>
  );
}
export default BooksList;
