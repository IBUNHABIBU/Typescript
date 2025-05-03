import React, { useState } from 'react';

const User = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setUsername(e.target.value)
    }
  return (
    <div>
        <h3>User</h3>
        <form action="">
            <input type="text" placeholder='Username' onChange={handleChange}/>
            <button onClick={handleClick}>Sign in</button>
        </form>
    </div>
  )
}

export default User;