import React from 'react'
import { Link } from 'react-router-dom'
function Ashok() {
  return (
    <div className="main">
      <div className='mainav'>
      <nav className='naveb'>
      <Link to="/Home">HOME</Link> &nbsp;
      <Link to="/AABOUT">ABOUT</Link> &nbsp;
      <Link to="/AACONTACT">CONTACT</Link>
</nav>
    </div>
    <center>
    <div className='person'>
   
        <h1 className='header'><u>Ashok</u></h1>
    <h3 className='role'>Frontend Developer</h3>
    
    </div>
    </center>
        </div>

  )
}

export default Ashok