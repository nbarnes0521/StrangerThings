import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Register } from './';
import Posts from './Posts';
import Login from './Login';
import CreatePost from './CreatePost';
import { fetchPosts, myData } from '../ajax Request';
import { Nav } from './';





function App() {
    const [token, setToken] = useState('');
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

async function getMyData() {
   const results = await myData(token);
   if (results.success) {
        setUser(results.data);
   }
}

    useEffect(() => {
        tokenCheck();
    }, [])

    useEffect(() => {
        getPosts();
        if (token) {
            getMyData();
            setIsLoggedIn(true);
        }
    }, [token])

    if (isLoggedIn) {
        console.log("User is logged in");
    } else {
        console.log("User is logged out");
    }

    function handlePostCreated(newPost) {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    }

// ROUTES =================================
    return (
    <div>
        <Nav setToken={setToken} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
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