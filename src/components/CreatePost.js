import React, { useState } from "react";
import { makePost } from "../ajax Request";
import { Link } from 'react-router-dom';

export default function CreatePost({ token, getPosts }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const post = {title, description, price}

        const results = await makePost(post, token)

        if (results.success) {
            
            console.log(results)
            getPosts();
        } 
    }

    return (
       
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(event) => {setTitle(event.target.value)}} 
                />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(event) => {setDescription(event.target.value)}} 
                />
            <input
                type="text"
                placeholder="Enter Price"
                value={price}
                onChange={(event) => {setPrice(event.target.value)}} 
                />
            <br></br>
            <button type="submit">
                Create Post
            </button>
            <Link to='/'> To Homepage</Link>
        </form>

    )
}

