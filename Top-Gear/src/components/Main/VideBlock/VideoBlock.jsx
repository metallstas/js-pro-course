import React from 'react'
import cls from './VideBlock.module.css'

const VideoBlock = (props) => {
  return (
    <div className={cls.videoBlock}>
      <div className={cls.videoWrapper}>
        <p>{props.title}:</p>
        <div>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
      <p className={cls.lineVideo}>
        <span></span>
      </p>
      <div className={cls.videoList}>
        {props.videoList.map((el) => (
          <div key={el.id}>
            <img alt='img' src={el.imgSrc} />
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoBlock
