import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const COHORT_NAME = '2301-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

/*
CRUD Applications
Create (2nd)
Read (1st)
Update
Destroy
*/
import './index.css'


const App = () => {
    const [posts, setPosts] = useState([]);
    console.log('Posts:', posts);

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch (
                //URL
            )
            const data = await resp.json();
            console.log('data:', data);
            setPosts(data);
        }
        fetchPosts();
    }, [])


    return <>
        <h1>
        Posts
        </h1> 
    
    </>
}

ReactDOM.render(

)