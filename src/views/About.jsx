import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    let navigate = useNavigate()
  return (
    <div>
        <p>About Page</p>
        <button onClick={()=>navigate("/", {state: "From About Page"})}>Redirect</button>
    </div>
  )
}

export default About