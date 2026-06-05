// Feed.jsx
import Post from "../components/Post";
import "./Feed.scss";
import { useEffect, useState } from "react";
import { usePost } from "../hooks/userPost";


function Feed() {

    const { feed, handleGetFeed, loading, setfeed } = usePost()


    useEffect(() => {
        handleGetFeed()
    }, [])


    const handleLiked = (id) => {
        const updateFeed = feed.map((post) =>
            post._id === id
                ? { ...post, isLiked: !post.isLiked }
                : post
        )
        setfeed(updateFeed)
    }



    if (loading) {
        return (<main><h1>Feed is Loading...</h1></main>)
    }

    if (!feed || feed.length === 0) {
        return (<main><h1>No posts available</h1></main>)
    }

    console.log(feed)

    return (
        <div >
            {feed.map((post) => (
                <div key={post._id || post.id} className="feedItem">
                    <Post
                        post={post}
                        user={post.user}
                        handleLiked={handleLiked}
                    />

                </div>
            ))}
        </div>
    );
}

export default Feed;