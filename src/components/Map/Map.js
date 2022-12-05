import React, { useState, useContext } from "react";

import { Pin } from '../Pin/Pin';

import { Context } from '../../state/store';
import './Map.css';

export const Map = () => {
  const { store, dispatch } = useContext(Context);
  const [ newComment, setNewComment ] = useState(null);
  const [ nextCommentId, setNextCommentId ] = useState(store.comments.length + 1);

  const addPin = (e) => {
    setNewComment({ 
      id: nextCommentId,  
      x: e.pageX, 
      y: e.pageY, 
      body: '', 
      user: 'Jenn Peavler',
      date: new Date(),
    });
  };

  const submitNewComment = (e) => {
    e.stopPropagation();
    dispatch({type: 'SUBMIT_NEW_COMMENT', comment: newComment});
    setNewComment(null);
    setNextCommentId(nextCommentId + 1);
  }
  
  return (
    <main className='map' onClick={(e) => addPin(e)}>
      
      {newComment && 
      <div className='new-comment' 
        style={{position: 'absolute', left: newComment.x - 30, top: newComment.y - 30}}
      >
        <textarea 
          autoFocus 
          value={newComment.body} 
          onChange={(e) => setNewComment(Object.assign({}, newComment, { body: e.target.value }))}     
          onClick={(e) => e.stopPropagation()}
        />
        <button onClick={(e) => submitNewComment(e)}>Comment</button>
      </div>}
      
      {store.comments.map(comment => <Pin key={comment.id} comment={comment} />)}
      
    </main>
  );
}