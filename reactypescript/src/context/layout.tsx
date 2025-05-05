import React from 'react'

const layout = ({children}: { children : React.ReactNode}) => {
  return (
    <div>
        <html lang='eng'>
            <body className={inter.className}>
                <div className="container">
                    <NavBar />
                    {children}
                </div>
            </body>
        </html>
    </div>
  )
}

export default layout