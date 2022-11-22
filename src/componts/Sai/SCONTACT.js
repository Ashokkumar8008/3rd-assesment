import React from 'react'
import { Link } from 'react-router-dom'

function SCONTACT() {
  return (
    <div>
        <center>
            <h1><u>SAI CONTACT</u></h1>
            <h2>MobileNo:7899384234</h2>
            <h2>emailId:sai@123.gmail.com</h2>
            <nav className='nave'>
      <Link to="/Home">HOME</Link>
      <Link to="/SABOUT">ABOUT</Link>
      </nav>
        </center>
    </div>
  )
}

export default SCONTACT