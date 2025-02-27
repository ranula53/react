import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1> 
      <button> <Link to="/About"> goto about </Link> </button>
      <button><Link to= "/Contact">click here to contact</Link></button>
    </div>
  );
}
