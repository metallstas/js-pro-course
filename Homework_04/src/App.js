import './App.css'
import Clock from './components/Clock/Clock'
import Converter from './components/Converter/Converter'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import PostsFacebook from './components/PostsFacebook/PostsFacebook'
import PostsOnliner from './components/PostsOnliner/PostsOnliner'

function App() {
  return (
    <div className='App'>
      <Posts />
      <PostsFacebook />
      <PostsOnliner />
      <Clock />
      <Converter />
      <Form />
    </div>
  )
}

export default App
