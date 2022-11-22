import React from 'react'
import { Link } from 'react-router-dom'

function BCONTACT() {
  return (
  
    <div className='main'>
    <div className='mainav'>
    <nav className='nave'>
    <Link to="/Home">HOME</Link> &nbsp;&nbsp;
    <Link to="/BABOUT">ABOUT</Link>
    </nav>
    </div>
      <center>
        <div className='person2'>
      <h1><u>BUNTY CONTACT</u></h1>
      <h2>MobileNo:8008148596</h2>
      <h2>emailId:bunty123@gmail.com</h2>
     </div>
    </center>
  </div>




    
  )
}

export default BCONTACT