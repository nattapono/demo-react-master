import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <p>Contact</p>
        <Link to="/" state={"From text"}>Back</Link>
    </div>
  )
}

export default Contact