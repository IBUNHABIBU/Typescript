import React from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Page = () => {
    const { state, dispatch } = useContext(ThemeContext)
  return (
    <div>
        <div className="useContextExample">
            <button>changeTheme</button>
            <button>Change font</button>
        </div>
    </div>
  )
}

export default Page