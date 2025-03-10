import React from 'react'
import {Link} from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h1>this is contact page</h1>
      <button> <Link to="/About"> goto about </Link> </button>
      <button><Link to = "/">go to home</Link></button>
    </div>
  )
}
