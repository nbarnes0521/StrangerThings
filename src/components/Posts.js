import React from 'react';

export default function Posts({ posts }) {
    // console.log('from Posts component', posts)

    return (
        <>
            {
            posts && posts.map((post) => {
                    return (
                    <p key={post._id}>{posts.title}</p>
                    )
                })
            }
        </>
    );
}
            

