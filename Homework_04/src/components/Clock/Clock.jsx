import React from 'react'
import cls from './Clock.module.css'

const Clock = () => {
  const date = new Date()
  return (
    <div className={cls.Clock}>
      {date.toLocaleTimeString()}
    </div>
  );
};

export default Clock
