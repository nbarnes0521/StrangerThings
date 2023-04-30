import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
    Register,
    Posts
} from './';

function App() {
    const [token, setToken] = useState('');

    // function tokenCheck() {
    //     if (window.localStorage.getItem('token')) {
    //         setToken(window.localStorage.getItem('token'));
    //     }
    // }

    // useEffect(() => {
    //     tokenCheck();
    // }, [])

    return (
    <div>
        <Routes>
            <Route 
                path=""
                element={<Posts />} 
            />
            <Route 
                path="/register"
                element={<Register setToken= {setToken} />}
            />
        </Routes> 
    </div>
    );
}

export default App;