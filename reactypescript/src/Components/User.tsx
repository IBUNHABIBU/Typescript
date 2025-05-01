import React, { useState } from 'react';

const User = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null)
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Username' onChange={handleChange}/>
            <button onClick={handleClick}>Sign in</button>
        </form>
    </div>
  )
}

export default User;