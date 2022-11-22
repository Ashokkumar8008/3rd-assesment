import React from 'react'
import { Link } from 'react-router-dom'

function Bunty() {
  return (
    <div className="main">
    <div className='mainav'>
    <nav className='naveb'>
    <Link to="/Home">HOME</Link> &nbsp;
    <Link to="/BABOUT">ABOUT</Link> &nbsp;
    <Link to="/BCONTACT">CONTACT</Link>
</nav>
  </div>
  <center>
  <div className='person2'>
      <h1 className='header'><u>BUNTY</u></h1>
  <h3 className='role'>Test Engineer</h3>
  </div>
  </center>
      </div> 
  )
}

export default Bunty