import React from 'react'
import cls from './PostItem.module.css'

const PostItem = ({title, subtitle, autor}) => {
  return (
    <div className={cls.post}>
      <div className={cls.postTitle}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className={cls.postAutor}>
        <p>Autor: <a href='/#'>{autor}</a></p>
      </div>
    </div>
  )
}

export default PostItem
