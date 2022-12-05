import { createContext } from 'react';

export const initialState = {
  comments: [
    {
      id: 1,
      user: 'Jenn Peavler',
      body: 'This app is so fun',
      x: 33,
      y: 33,
      date: new Date(),
    }
  ],
  highlightedComment: 0,
  highlightedPin: 0,
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'SUBMIT_NEW_COMMENT':
      return { ...state, comments: [...state.comments, action.comment] };
    case 'HIGHLIGHT_COMMENT':
      return { ...state, highlightedComment: action.id };
    case 'HIGHLIGHT_PIN':
      return { ...state, highlightedPin: action.id };
		default:
			return state;
  }
};

export const Context = createContext();