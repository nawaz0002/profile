import React,{useState} from 'react'

const Likes = ({postId}) => {
    // posts: state.posts.map(post => post._id === payload._id ? {...post, likes: payload.likes} : post),

    const [like, setLike] = useState({
        pid: null, 
        likes: []
    })

    const likeHandler = (postId) => {
        // likePost(post._id)
        // let pId = postId
        // console.log(typeof localStorage.getItem('id'))
        console.log(postId)
        const userId = localStorage.getItem('id')
        setLike({pid: postId, likes: [like.likes, userId]})
        console.log(like)
    }
    return (
        <div style={{display: 'flex'}}>
                <>
                    <p className="red-color" onClick={() => likeHandler(postId)}><i className="material-icons prefix">favorite_border</i></p>
                    <p style={{marginLeft: '8px'}}>2</p>
                </>
        </div>
    )
}


export default Likes;
