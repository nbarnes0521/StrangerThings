import React, { useState } from 'react';
import { registerUser } from '../ajax Request';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



function handleSubmit(event){
    event.preventDefault();
    const user = {username, password};

    registerUser(user);
   // This is the submit button event

}

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='Enter Username'
            onChange={(event) => setUsername(event.target.value)}
            />
            <input 
            type='password'
            placeholder='Enter Password'
            onChange={(event) => setPassword(event.target.value)}
            />
            <button type='submit'> Submit Here </button>

        </form>
    )
}

export default Register;