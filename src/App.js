import React, { useReducer } from 'react';
import { initialState, reducer, Context } from './state/store';

import { Map } from './components/Map/Map';
import { CommentList } from './components/CommentList/CommentList';

import './App.css';

export default function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  
  return (
    <Context.Provider value={{ store, dispatch }}>
      <main className='app'>
        <Map />
        <CommentList />
      </main>
    </Context.Provider>
  );
};
