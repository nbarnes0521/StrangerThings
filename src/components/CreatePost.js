import React, { useState } from "react";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(title, description, price)
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
        </form>

    )
}

