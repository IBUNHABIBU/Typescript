
import './App.css'
import Child from './children/Child'
import Parent from './children/Parent'
import Form from './Components/Form'
import PostList from './Components/PostList'
import User from './Components/User'
import { ThemeProvder } from './context/ThemeContext'

function App({children}: { children: React.ReactNode}) {

  return (
    <>
      <div>
        <ThemeProvder>

        {children}
        
        <User />
        <Form />
        <Parent>
          <Child />
        </Parent>
        <PostList />
        </ThemeProvder>
      </div>
    </>
  )
}

export default App
