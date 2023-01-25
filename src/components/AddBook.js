import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line no-unused-vars
import { ADD_BOOK } from '../redux/books/books';
import { LIST_DATA } from '../redux/books/showBookList';

export default function AddBook() {
  const [booklist, setBookList] = useState(
    {
      item_id: null,
      title: '',
      author: '',
      category: '',
    },
  );
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setBookList((prevbooklist) => ({
      ...prevbooklist,
      item_id: uuidv4(),
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD_BOOK(booklist));
    setBookList((prevstate) => (
      {
        ...prevstate,
        title: '',
        author: '',
        category: '',
      }
    ));
    dispatch(LIST_DATA());
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
        value={booklist.title}
        placeholder="Book title"
        required
        onChange={handleChange}
      />

      <input
        type="text"
        maxLength={15}
        id="author"
        placeholder="Author name"
        required
        name="author"
        value={booklist.author}
        onChange={handleChange}
      />
      <select id="category" value={booklist.category} onChange={handleChange} name="category" className="browser-default">
        <option value="">--Choose Category--</option>
        <option value="Action">Action</option>
        <option value="Thriller">Thriller</option>
        <option value="Fiction">Fiction</option>
        <option value="Science">Science</option>
        <option value="Romantic">Romantic</option>

      </select>

      <button className="add-btn" type="submit">
        Add Book
      </button>
    </form>
  );
}
