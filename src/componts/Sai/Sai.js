import React from 'react'
import { Link } from 'react-router-dom'
// import Bunty from './componts/Bunty/Bunty';

function Sai() {
  return (
<center>
    <div>
        <h1 className='header'><u>SAI</u></h1>
    <h3 className='role'>Frontend Developer</h3>
    <nav className='nave'>
      <Link to="/Home">HOME</Link>
      <Link to="/SABOUT">ABOUT</Link>
      <Link to="/SCONTACT">CONTACT</Link>

    </nav>
    </div>
    </center>
      )
}

export default Sai