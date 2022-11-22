import React from 'react'
import { Link } from 'react-router-dom'

function BCONTACT() {
  return (
    <div>
        <center>
            <h1><u>BUNTY CONTACT</u></h1>
            <h2>MobileNo:9100288092</h2>
            <h2>emailId:bunty123@gmail.com</h2>
            <nav className='nave'>
      <Link to="/Home">HOME</Link>
      <Link to="/BABOUT">ABOUT</Link>
      </nav>
        </center>
    </div>
  )
}

export default BCONTACT