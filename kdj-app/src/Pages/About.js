import React from 'react'
import {Link} from 'react-router-dom'

import './About.css'
export default function About() {
  return (
    <div>
      <h1 className='h1'>this is about page</h1>
      <button><Link to = "/">go to home</Link></button>
      <button><Link to= "/Contact">click here to contact</Link></button>
     

      
    </div>
  )
}
