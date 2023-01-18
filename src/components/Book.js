import React from 'react';

export default function Book(props) {
  // eslint-disable-next-line react/prop-types
  const { category, title, author } = props;
  return (
    <div className="book-section">
      <div className="book-info">
        <h6 className="category grey-text">
          {category}
        </h6>
        <h2 className="book-title">{title}</h2>
        <span className="author-info">{author}</span>
        <ul className="actions">
          <li className="action-link blue-text">Comments</li>
          <li className="action-link blue-text">Remove</li>
          <li className="action-link blue-text">Edit</li>
        </ul>
      </div>
    </div>
  );
}
