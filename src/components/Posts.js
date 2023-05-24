import React, {Fragment} from 'react';

export default function Posts({ posts }) {
    // console.log('from Posts component', posts)

    return (
        <>
            {
            posts && posts.map((post) => {
                    return (
                        <Fragment key={post._id}>
                        {
                            post.isAuthor ? (
                                <>
                                <p>{post.title}</p>
                                <button>Delete</button>
                                </>
                                ) : (   <p>{post.title}</p>
                    )
                        }
                        </Fragment>
                    )
                })
            }
        </>
    );
}
            

