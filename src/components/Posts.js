import React from 'react'
import Post from './Post'

const Posts = ({postsData}) => {
    // console.log(postsData)
    return (
        <div>
            {postsData && postsData.map(post => <Post key={post.id} postData={post} /> )}
        </div>
    )
}

export default Posts
