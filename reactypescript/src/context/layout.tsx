import React from 'react'
import { ThemeProvder } from './ThemeContext'

const layout = ({children}: { children : React.ReactNode}) => {
  return (
    <div>
        <html lang='eng'>
            <body className={inter.className}>
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