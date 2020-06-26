import React,{useState, useEffect} from 'react'

const Likes = ({postId}) => {

    const [like, setLike] = useState({
        pid: null, 
        likes: []
    })

    const likeHandler = (postId) => {

        const userId = localStorage.getItem('id')
        setLike({
            pid: postId, 
            likes: [...like.likes, userId]
        })
        localStorage.setItem(`details`, JSON.stringify({pid: postId, likes: [...like.likes, userId]}))
    }
    return (
        <div style={{display: 'flex'}}>
                <>
                    <p className="red-color" onClick={() => likeHandler(postId)}><i className="material-icons prefix">favorite_border</i></p>
                    <p style={{marginLeft: '8px'}}>{like && like.likes ? like.likes.length : 0}</p>
                </>
        </div>
    )
}


export default Likes;
