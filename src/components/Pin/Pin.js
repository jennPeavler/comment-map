import React, { useContext } from "react";

import { Context } from '../../state/store';
import './Pin.css';

export const Pin = ({ comment }) => {
  const { store, dispatch } = useContext(Context);
  const highlightedClass = store.highlightedPin === comment.id ? 'pin--highlighted' : '';
  
  return (
    <div className={`pin ${highlightedClass}`}  
      style={{position: 'absolute', left: comment.x, top: comment.y}} 
      onMouseEnter={() => dispatch({type: 'HIGHLIGHT_COMMENT', id: comment.id })} 
      onMouseLeave={() => dispatch({type: 'HIGHLIGHT_COMMENT', id: 0 })}
    >
    </div>
  );
}