import React from 'react'
import { ThemeProvder } from './ThemeContext'
import NavBar from '../Components/NavBar'

const layout = ({children}: { children : React.ReactNode}) => {
  return (
    <div>
        <html lang='eng'>
            <body className="bodyclass">
                <ThemeProvder>
                    <div className="container">
                        <NavBar />
                        {children}
                    </div>
                </ThemeProvder> 
            </body>
        </html>
    </div>
  )
}

export default layout