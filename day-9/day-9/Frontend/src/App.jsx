import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [notes, setnotes] = useState([])

  // console.log("hello integration")

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then((res) => {
        setnotes(res.data.notes)
      })
  }

  //this will run once 
  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements
    /*Take the properties named title and description from e.target.elements and store them in variables with the same name. */
    console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
      .then(res => {
        console.log(res.data)

        fetchNotes()
      })

  }


  function handleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId)
      .then(res => {
        console.log(res.data)
        fetchNotes()
      })
  }

  const [newdescription, setnewdescription] = useState("")

  function handleUpdataNote(noteId) {
    axios.patch("http://localhost:3000/api/notes/" + noteId, {
      description: newdescription
    })
      .then(res => {
        console.log(res.data)
        fetchNotes()
      })
  }



  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter Title' />
        <input name='description' type="text" placeholder='Enter Description' />
        <input type="text" placeholder='Enter newDescription' value={newdescription} onChange={(e) => { setnewdescription(e.target.value) }} />

        <button>Create note</button>
      </form>
      <div className="notes">
        {notes.map((val, index) => {
          return <div className="note" key={val._id}>
            <h1>{val.title}</h1>
            <p>{val.description}</p>

            <button onClick={() => { handleDeleteNote(val._id) }} >Delete</button>
            <button onClick={() => { handleUpdataNote(val._id) }}>Update</button>
          </div>
        })}
      </div>
    </>
  )
}

export default App
