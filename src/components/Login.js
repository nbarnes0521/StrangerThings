import React, { useState } from 'react';
import { login } from '../ajax Request';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

async function handleSubmit(event){
    event.preventDefault();
    const user = {username, password};

    const results = await login(user);
   // This is the submit button event


    if (results.success) {
        setToken(results.data.token);
        window.localStorage.setItem("token", results.data.token)
    }

}

    return (
        <form onSubmit={handleSubmit}>
            <p>
                Login Here
            </p>
            <br></br>
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

export default Login;