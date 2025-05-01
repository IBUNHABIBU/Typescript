
import './App.css'
import Child from './children/Child'
import Parent from './children/Parent'
import PostList from './Components/PostList'

function App() {

  return (
    <>
      <div>
        <Parent>
          <Child />
        </Parent>
        <PostList />
      </div>
    </>
  )
}

export default App
