import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from './';
import Posts from './Posts';
import Login from './Login';
import CreatePost from './CreatePost';
import { fetchPosts } from '../ajax Request';
import { Nav } from './';





function App() {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);

    function tokenCheck() {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        }
    }

async function getPosts() {
    const results = await fetchPosts(token);
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

    function handlePostCreated(newPost) {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    }

// ROUTES =================================
    return (
    <div>
        <Nav />
        <Routes>
            <Route 
                path="/"
                element={<Posts posts={posts} token={token} />} 
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
                element={<CreatePost token={token} getPosts={getPosts}/>}
            />
        </Routes> 
    </div>
    );
}

export default App;