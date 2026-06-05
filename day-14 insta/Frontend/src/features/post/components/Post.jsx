import React, { useState } from 'react'
import "../pages/Feed.scss"
const Post = ({ user, post }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
        <div className="feedPost">
            <div className="postHeader">
                <img
                    src={user.profileImage}
                    alt="profile"
                />

                <div className="userInfo">
                    <h4>{user.username}</h4>
                    <p>Delhi, India</p>
                </div>
            </div>
            <div className="postImage">
                <img
                    src={post.imgUrl}
                    alt="post"
                />
            </div>
            <div className="postActions">
                <div className="leftActions">
                    <span
                        className={post.isLiked ? "Liked" : ""}
                        onChange={() => {
                            if (post.isLiked) {
                                setLiked(true)
                            } else {
                                setLiked(false)
                            }

                        }}
                    >
                        {liked ? "❤️" : "🤍"}
                    </span>
                    <span className="icon">💬</span>
                    <span className="icon">📤</span>
                </div>
                <div className="rightActions">
                    <span
                        className="icon"
                        onClick={() => setSaved(!saved)}
                    >
                        {saved ? "🔖" : "📑"}
                    </span>
                </div>
            </div>
            <div className="postContent">
                <h5>2,341 likes</h5>

                <p>
                    <span>paawan_dev</span>
                    {post.caption}
                </p>

                <small>View all 124 comments</small>

                <div className="commentBox">
                    <input type="text" placeholder="Add a comment..." />
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Post
