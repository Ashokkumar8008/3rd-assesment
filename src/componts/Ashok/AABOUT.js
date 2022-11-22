import React from 'react'
import { Link } from 'react-router-dom'

function AABOUT() {
  return (
    <div className='main'>
      <div className='mainav'>
      <nav className='nave'>
      <Link to="/Home">HOME</Link> &nbsp;&nbsp;
      <Link to="/AACONTACT">CONTACT</Link>
      </nav>
      </div>
        <center>
          <div className='person1'>
        <h1><u>ABOUT ASHOK</u></h1>
        <h3>ASHOK Working  on Frontend Developer. he is joined Fresher in XYRAM SOFTWARE SOLUTIONS.LTD. he is Good know html,css,javascript,react js. in Frontend side. he want to learn more.</h3>
       </div>
      </center>
    </div>
  )
}

export default AABOUT