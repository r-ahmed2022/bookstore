/* eslint-disable react/self-closing-comp */
/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { REMOVE_BOOK } from '../redux/books/books';

function Book(props) {
  const {
    item_id, category, title, author,
  } = props;
  const dispatch = useDispatch();
  const circleValue = Math.floor(Math.random() * 100) + 1;
  const currentChapter = Math.floor(Math.random() * 11) + 1;

  return (
    <div className="book-section">
      <div className="book-info">
        <div className="book">
          <h5 className="book-category grey-text">
            {category}
          </h5>
          <h2 className="book-title Text-Style-6">{title}</h2>
          <span className="author-info Text-style-8">{author}</span>
        </div>
        <ul className="actions">
          <li className="action-link blue-text"><input type="button" className="btn blue-text Text-Style-8" value="Comments" /></li>
          <li className="action-link blue-text Text-Style-8">
            <input
              type="button"
              className="btn blue-text Text-Style-8"
              value="Remove"
              onClick={() => {
                dispatch(REMOVE_BOOK(item_id));
              }}
            />

          </li>
          <li className="action-link blue-text"><input type="button" className="btn blue-text" value="Edit" /></li>
        </ul>
      </div>
      <div className="right-div">
        <div className="circle-div">
          <div className="Rectangle-3">
            <CircularProgressbar value={circleValue} />
          </div>
          <div className="percent-div">
            <span className="-Percent-Complete">
              { circleValue }
              %
            </span>
            <span className="Completed"> Completed</span>
          </div>
        </div>
        <div className="progress-div">
          <span className="Current-Chapter Text-Style-7">Current Chapter</span>
          <span className="Current-Lesson Text-Style-4">
            Chapter &nbsp;
            {currentChapter}

          </span>
          <div className="Rectangle-2">
            <span className="Update-progress">Update progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
