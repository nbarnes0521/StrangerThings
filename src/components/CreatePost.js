import React, { useState } from "react";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    return (
       
        <form>
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
        </form>

    )
}

