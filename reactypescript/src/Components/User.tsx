import React, { useState } from 'react';
import { UserType } from '../types/types';

const User = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState<UserType>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setUsername(e.target.value)
    }

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            name: username,
            sessionId: Math.random()
        })
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