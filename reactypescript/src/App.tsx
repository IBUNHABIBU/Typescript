
import './App.css'
import Child from './children/Child'
import Parent from './children/Parent'
import Form from './Components/Form'
import PostList from './Components/PostList'

function App() {

  return (
    <>
      <div>
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
