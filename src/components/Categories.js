import React from 'react';

export default function Categories() {
  const checkStatus = () => {
    // eslint-disable-next-line no-undef
    M.toast({ html: 'Page under Construction!' });
  };
  const styles = {
    backgroundColor: '#0290FF',
    border: 'none',
    'border-radius': '10px',
  };

  return (
    <div className="category-page">
      <input type="button" style={styles} className="btn-status" value="Check Status" onClick={checkStatus} />
    </div>
  );
}
