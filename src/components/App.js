import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
    Register,
    Posts
} from './';
import { fetchPosts } from '../ajax Request';

function App() {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);

    function tokenCheck() {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect(() => {
        setPosts(fetchPosts());
    }, [token])

    return (
    <div>
        <Routes>
            <Route 
                path="/"
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