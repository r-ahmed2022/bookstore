import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_BOOK } from '../redux/books/books';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-section">
      <div className="book-info">
        <h6 className="category grey-text">
          {}
        </h6>
        <h2 className="book-title">{title}</h2>
        <span className="author-info">{author}</span>
        <ul className="actions">
          <li className="action-link blue-text"><input type="button" className=" btn blue-text" value="Comments" /></li>
          <li className="action-link blue-text"><input type="button" className="btn blue-text" value="Remove" onClick={() => dispatch(REMOVE_BOOK(id))} /></li>
          <li className="action-link blue-text"><input type="button" className="btn blue-text" value="Edit" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Book;
