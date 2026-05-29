// Feed.jsx
import "./Feed.scss";
import { useState } from "react";

function Feed() {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
        <div className="feedPost">
            <div className="postHeader">
                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="profile"
                />

                <div className="userInfo">
                    <h4>paawan_dev</h4>
                    <p>Delhi, India</p>
                </div>
            </div>

            <div className="postImage">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                    alt="post"
                />
            </div>

            <div className="postActions">
                <div className="leftActions">

                    <span
                        className={`icon`}
                        onClick={() => setLiked(!liked)}

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
                    Building my dream life one line of code at a time 🚀🔥
                </p>

                <small>View all 124 comments</small>

                <div className="commentBox">
                    <input type="text" placeholder="Add a comment..." />
                    <button>Post</button>
                </div>
            </div>
        </div>
    );
}

export default Feed;