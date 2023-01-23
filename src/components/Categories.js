import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { displayStatus } from '../redux/categories/categories';

export default function Categories() {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    const { payload } = dispatch(displayStatus());
    setStatus(payload);
  };

  return (
    <div className="category-page">
      <button
        type="button"
        className="chk-status add-btn"
        onClick={handleClick}
      >
        Check status
      </button>
      <h1 className="error-msg">{status}</h1>
    </div>
  );
}
