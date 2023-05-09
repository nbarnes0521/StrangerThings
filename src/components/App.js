import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
    Register,
    Posts,

} from './';

import Login from './Login';

import CreatePost from './CreatePost';

import { fetchPosts } from '../ajax Request';


function App() {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);

    function tokenCheck() {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        }
    }

async function getPosts() {
    const results = await fetchPosts();
    if (results.success) {
        setPosts(results.data.posts)
    }
}

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect(() => {
        getPosts();
    }, [token])

// ROUTES =================================
    return (
    <div>
        <Routes>
            <Route 
                path="/"
                element={<Posts posts={posts} />} 
            />
            <Route 
                path="/register"
                element={<Register setToken= {setToken} />}
            />
            <Route
                path="/login"
                element={<Login setToken={setToken} />}
            />
            <Route
                path="/create-post"
                element={<CreatePost token={token}/>}
            />
        </Routes> 
    </div>
    );
}

export default App;