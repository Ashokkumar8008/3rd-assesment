import React from 'react'
import { Link } from 'react-router-dom'

function YCONTACT() {
  return (
    <div>
        <center>
            <h1><u>Yashwanth Contact</u></h1>
            <h2>MobileNo:939234234</h2>
            <h2>emailId:yashwanth23@gmail.com</h2>
            <nav className='nave'>
      <Link to="/Home">HOME</Link>
      <Link to="/YABOUT">ABOUT</Link>
</nav>
        </center>
    </div>
  )
}

export default YCONTACT