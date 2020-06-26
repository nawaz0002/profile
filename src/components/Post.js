import React, {useEffect} from 'react'
import Like from './Like'
// import john from '../assets/john.png'

const Post = ({postData}) => {

    return (
        <div className="post-container">
            {postData && (
                <>
                <div className="post-upper-details">
                <img className="profile-img"  src="https://img.icons8.com/color/48/000000/user.png"/>
                <div className="name-username">
                    <h4 className="name">{postData.profileName}</h4>
                    <p className="username">@{postData.userName}</p>
                    <h4 className="post-heading">{postData.post}</h4>
                </div>
                </div>
                <div className="profile-lower-details">
                    <img className="post-img" src='https://cdn.wpbeginner.com/wp-content/uploads/2020/03/addlinkinwp-og.png' alt="" />
                    <Like postId={postData.id}/>
                </div>
                </>
            )}
        </div>
    )
}


export default Post;
