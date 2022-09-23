import React from 'react';
import '../stylesheets/comments.css';

function comments (props) {
  return (
    <div className='comments-container'>
      <img
        className='comments-img'
        src={props.image}
        alt='Foto de Emma'/>
      <div className='container-text-comments'>
        <p className='comment-name'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='comment-position'>
          {props.position} at  <strong>{props.company}</strong>
        </p>
        <p className='comment-text'>"{props.comment}"</p>
      </div>
    </div>
  );
}

export default comments;
