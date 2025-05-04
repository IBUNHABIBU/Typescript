
import './App.css'
import Child from './children/Child'
import Parent from './children/Parent'
import Form from './Components/Form'
import PostList from './Components/PostList'
import User from './Components/User'

function App() {

  return (
    <>
      <div>
        <User />
        <Form />
        <Parent>
          <Child />
        </Parent>
        <PostList />
      </div>
    </>
  )
}

export default App
