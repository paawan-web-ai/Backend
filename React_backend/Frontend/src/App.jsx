import { React, useState } from "react";

const App = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [alltitle, setalltitle] = useState([])

  const submitHandler = (e) => {
    console.log(name, email)

    let oldtitle = [...alltitle]
    oldtitle.push({ name, email })
    setalltitle(oldtitle)


    console.log(alltitle)
    e.preventDefault()
    setName("")
    setEmail("")
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e)

        }}
      >
        <input
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          type="text" placeholder="Enter Name" />
        <input
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          type="email" placeholder="Enter Email" />
        <button>Submit</button>
      </form>

      {alltitle.map((val, idx) => {
        return <div key={idx}>
          <p>{val.name}</p>
          <p>{val.email}</p>
        </div>
      })}
    </div>
  )
}

export default App;