import React from 'react'
import cls from './PostOnlinerItem.module.css'

const PostOnlinerItem = ({ img, category, commentCount, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={cls.PostOnlinerWrap}
    >
      <div className={cls.coment}>
        <p className={cls.category}>{category}</p>
        <div className={cls.block}>
          <p>{commentCount}</p>
        </div>
      </div>
      <h2>{title}</h2>
    </div>
  )
}

export default PostOnlinerItem