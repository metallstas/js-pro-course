import React from 'react'
import PostOnlinerItem from './PostOnlinerItem/PostOnlinerItem'

const postsOnliner = [
  {
    img: './images/Sport.jpeg',
    title: 'Успех вопреки всему',
    comment: 153,
    category: 'Спорт',
    onClick() {
      alert('Click')
    },
    id: 1,
  },
  {
    img: './images/People.jpeg',
    title: 'В 42 года отказался от кресларуководителя и стал поваром',
    comment: 103,
    category: 'Люди',
    onClick() {
      alert('Click')
    },
    id: 2,
  },
  {
    img: './images/Tehnologi.jpeg',
    title:
      'Ровер NASA нашел на Марсе нечто, что может указывать на существование инопланетной жизни',
    comment: 87,
    category: 'Технологии',
    onClick() {
      alert('Click')
    },
    id: 3,
  },
]

const PostsOnliner = () => {
  return (
    <div>
      {postsOnliner.map((post) => (
        <PostOnlinerItem
          key={post.id}
          img={post.img}
          title={post.title}
          category={post.category}
          commentCount={post.comment}
          onClick={post.onClick}
        />
      ))}
    </div>
  )
}

export default PostsOnliner
