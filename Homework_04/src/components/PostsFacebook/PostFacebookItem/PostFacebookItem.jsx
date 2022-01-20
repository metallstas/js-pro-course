import React from 'react'
import cls from './PostFacebookItem.module.css'

const PostFacebookItem = (props) => {
  const {
    img,
    name,
    postDescription,
    location,
    timeText,
    onClickLike,
    onClickReply,
  } = props

  return (
    <div className={cls.PostFacebook}>
      <img alt='img' src={img} />
      <div>
        <p className={cls.postName}>{name} </p>
        <span>&middot; {location}</span>
        <p className={cls.postText}>{postDescription}</p>
        <div className={cls.likeBlock}>
          <button onClick={onClickLike}>Like</button>
          <span>&middot;</span>
          <button onClick={onClickReply}>Reply</button>
          <span>&middot; {timeText} ago</span>
        </div>
      </div>
    </div>
  )
}

export default PostFacebookItem
