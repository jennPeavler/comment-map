import React, { useContext } from "react";

import { Author } from '../Author/Author';

import { Context } from '../../state/store';
import './Comment.css';

export const Comment = ({ comment }) => {
  const { store, dispatch } = useContext(Context);
  const highlightedClass = store.highlightedComment === comment.id ? 'comment--highlighted' : '';
	
  return (
    <div 
      className={`comment ${highlightedClass}`} 
      onMouseEnter={() => dispatch({type: 'HIGHLIGHT_PIN', id: comment.id })} 
      onMouseLeave={() => dispatch({type: 'HIGHLIGHT_PIN', id: 0 })}
    >          
      {comment.body}
      <Author name={comment.user} date={comment.date} />
    </div>
  );
};