import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Feed = () => {
    const [post, setposts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1770699196996-1c94e091cdfb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
            title: "title1",
            description: "description1"
        }
    ])

    function fetchData() {
        axios.get("http://localhost:3000/api/notes")
            .then((res) => {
                // console.log(req.data)
                setposts(res.data.note)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <section className='feed-section'>

                {post.map((val, index) => {
                    return <div key={val._id} className='post-card'>

                        <img src={val.image} alt="" />
                        <h1>{val.title}</h1>
                        <h3>{val.description}</h3>
                    </div>
                })}
            </section>
        </div>
    )
}

export default Feed
