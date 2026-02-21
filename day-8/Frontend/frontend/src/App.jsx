import { useState } from 'react'
import axios from 'axios'


function App() {
  const [notes , setNotes] = useState([
  {
    title:"test title",
    description:"test description"
  },
  {
    title:"test title",
    description:"test description"
  },
  {
    title:"test title",
    description:"test description"
  },
  {
    title:"test title",
    description:"test description"
  },
])

  axios.get('http://localhost:3000/api/notes') 
  .then((res)=>{
    // console.log(res.data.notes)
    setNotes(res.data.notes)
  })
  return (
    <>
    <div className="notes">
      {
        notes.map((val,index)=>{
        return <div className="note" key={index}>
          <h1>{val.title}</h1> 
          <p>{val.description}</p>
        </div>
        })
      }
    </div>
    </>
  )
}

export default App
