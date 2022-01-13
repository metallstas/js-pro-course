import React from 'react';
import cls from './MainListItem.module.css'

const MainListItem = ({ src, title, text, linkText }) => {
  return (
    <div className={cls.MainListItem}>
      <img src={src} alt='img'/>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{linkText}</button>
      </div>
    </div>
  );
};

export default MainListItem;