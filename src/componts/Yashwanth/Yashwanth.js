import React from 'react'
import { Link } from 'react-router-dom'
// import App from './App.js';

function Yashwanth() {
  return (
<center>
    <div>
        <h1 className='header'><u>Yashwanth</u></h1>
    <h3 className='role'>Backend Developer</h3>
    <nav className='nave'>
      <Link to="/Home">HOME</Link>
      <Link to="/YABOUT">ABOUT</Link>
      <Link to="/YACONTACT">ACONTACT</Link>

    </nav>
    </div>
    </center>
      )
}

export default Yashwanth