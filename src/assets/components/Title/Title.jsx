import React from 'react';
import "./title.css";

const Title = ({ text, spantext, tag }) => {
  return (
    <div className='section-header-top'>
      {tag && <div className='section-tag'>{tag}</div>}
      <h2 className='titleh'>
        {text} <span className='titles'>{spantext}</span>
      </h2>
      <div className='title-divider'>
        <span className='title-divider-line'></span>
        <span className='title-divider-dot'></span>
        <span className='title-divider-line'></span>
      </div>
    </div>
  );
};

export default Title;