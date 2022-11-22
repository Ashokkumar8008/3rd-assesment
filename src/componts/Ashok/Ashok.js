import React from 'react'
import { Link } from 'react-router-dom'
function Ashok() {
  return (
    <div >
      
    
    <center>
    <div>
        <h1 className='header'><u>Ashok</u></h1>
    <h3 className='role'>Frontend Developer</h3>
    <nav className='nave'>
      <Link to="/Home">HOME</Link>
      <Link to="/AABOUT">ABOUT</Link>
      <Link to="/AACONTACT">CONTACT</Link>

    </nav>
    </div>
    </center>
        </div>

  )
}

export default Ashok