import React from 'react'
import { Link } from 'react-router-dom'
// import Bunty from './componts/Bunty/Bunty';

function Sai() {
  return (

<div className="main">
      <div className='mainav'>
      <nav className='naveb'>
      <Link to="/Home">HOME</Link> &nbsp;
      <Link to="/SABOUT">ABOUT</Link> &nbsp;
      <Link to="/SCONTACT">CONTACT</Link>
</nav>
    </div>
    <center>
    <div className='person'>
   
        <h1 className='header'><u>SAI</u></h1>
    <h3 className='role'>Frontend Developer</h3>
    
    </div>
    </center>
        </div>




      )
}

export default Sai