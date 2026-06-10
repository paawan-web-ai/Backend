import React, { useRef, useState } from 'react'
import "../pages/Feed.scss"
const CreatePost = () => {

    const [caption, setcaption] = useState("")
    const postImageInputFieldRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()

        const file = postImageInputFieldRef.current.files[0]
    }

    return (
        <main className="create-post-page">
            <div className="form-container">
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="postImage">Select Image</label>
                    <input hidden type="file" name="postImage" id='postImage' />
                    <input type="text" name='caption' id='caption' placeholder='enter caption' />
                    <button className='button' >createPost</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost
