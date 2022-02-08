import React from 'react'
import PostItem from './PostItem./PostItem'
import cls from './Posts.module.css'


const posts = [
  {
    id: 1,
    autor: 'Alias Odio',
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    subtitle:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
  {
    id: 2,
    autor: 'Sit Quis',
    title: 'voluptatem eligendi optio',
    subtitle:
      'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum',
  },
  {
    id: 3,
    autor: 'Maiores Dolores',
    title: 'eveniet quod temporibus',
    subtitle:
      'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae',
  },
  {
    id: 4,
    autor: 'Dias Adio',
    title: 'doloribus ad provident suscipit at',
    subtitle:
      'qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo',
  },
]

const Posts = ({ title, subtitle, autor }) => {
  return (
    <div className={cls.postsWrap}>
      {posts.map((post) => (
        <PostItem
          title={post.title}
          subtitle={post.subtitle}
          autor={post.autor}
          key={post.id}
        />
      ))}
    </div>
  )
}

export default Posts
