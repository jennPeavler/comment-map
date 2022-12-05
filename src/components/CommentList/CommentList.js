import React, { useContext } from "react";

import { Comment } from '../Comment/Comment';

import { Context } from '../../state/store';
import './CommentList.css';

export const CommentList = () => {
  const { store } = useContext(Context);

	//scroll the comment list to the highlighted comment
	if(store.highlightedComment) {
		const commentIndex = store.comments.findIndex(comment => comment.id === store.highlightedComment);
		const commentElements = document.getElementsByClassName('comment');
		commentElements[commentIndex].scrollIntoView();
	}

  return (
    <aside className='comment-list'>
      {store.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </aside>
  );
};