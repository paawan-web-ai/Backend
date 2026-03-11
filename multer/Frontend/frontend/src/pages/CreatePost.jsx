import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        axios.post("http://localhost:3000/api/notes", formData)
            .then((res) => {
                navigate("/feed")
            })
    }


    return (
        <div>
            <section className='create-post-section'>
                <h1>create post</h1>

                <form onSubmit={handleSubmit}>
                    <input type="file" name='image' accept='image' />
                    <input placeholder='Enter title' type="text" name='title' required />
                    <input placeholder='Enter description' type="text" name='description' required />
                    <button>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default CreatePost
