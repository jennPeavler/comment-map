import React from "react";

import './Author.css';

export const Author = ({ name, date }) => {
  return (
    <div className='author'>
      <div className='initials'>{getInitials({ name })}</div>
      <div className='date'>{date.toDateString()}</div>
    </div>
  )  
}

const getInitials = ({ name }) => {
  return name.split(' ').map((n) => n[0].toUpperCase()).join('');
}


