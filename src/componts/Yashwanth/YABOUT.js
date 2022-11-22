import React from 'react'
import { Link } from 'react-router-dom'

function YABOUT() {
  return (

    <div className='main'>
    <div className='mainav'>
    <nav className='nave'>
    <Link to="/Home">HOME</Link> &nbsp;&nbsp;
    <Link to="/YCONTACT">CONTACT</Link>
    </nav>
    </div>
      <center>
        <div className='person4'>
      <h1><u>ABOUT YASHWANTH</u></h1>
      <h4>YASHWANTH Working on Frontend Develope. he is started career in XYRAM SOFTWARE SOLUTIONS.LTD. he have 1 year experience in Frontend Developer. he Good know in Angula,React js </h4>
     </div>
    </center>
  </div>

  )
}

export default YABOUT