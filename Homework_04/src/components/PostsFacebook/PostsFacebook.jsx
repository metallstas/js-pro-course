import React from 'react'
import cls from './PostsFacebook.module.css'
import PostFacebookItem from './PostFacebookItem/PostFacebookItem'

const postsFacebook = [
  {
    id: 1,
    img: './images/images.png',
    name: 'Bob Lee',
    text: 'Lorem ipsum dolor sit amet consectetur',
    location: 'Barcelona',
    timeText: '2 seconds',
    like() {
      alert('Like!')
    },
    reply() {
      alert('Reply')
    },
  },
  {
    id: 2,
    img: './images/images1.png',
    name: 'Marty Wood',
    text: 'Quisquam sequi quia quod dignissimos',
    location: 'Lyon',
    timeText: '3 mounth',
    like() {
      alert('Like!')
    },
    reply() {
      alert('Reply')
    },
  },
  {
    id: 3,
    img: './images/images2.png',
    name: 'Peter White',
    text: 'Minima nam amet debitis quo possimus praesentium',
    location: 'Barcelona',
    timeText: '1 year',
    like() {
      alert('Like!')
    },
    reply() {
      alert('Reply')
    },
  },
]

const PostsFacebook = () => {
  return (
    <div className={cls.PostsFacebookWrap}>
      {postsFacebook.map((post) => (
        <PostFacebookItem
          key={post.id}
          img={post.img}
          name={post.name}
          postDescription={post.text}
          location={post.location}
          timeText={post.timeText}
          onClickLike={post.like}
          onClickReply={post.reply}
        />
      ))}
    </div>
  )
}

export default PostsFacebook
