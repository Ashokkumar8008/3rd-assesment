import React from 'react'
import { Link } from 'react-router-dom'

function Bunty() {
  return (
    <center>
    <div>
        <h1 className='header'><u>Bunty</u></h1>
    <h3 className='role'>Tester</h3>
    {/* <Link to="#">More..</Link><br />
    <Link to="/Sai">Next.!</Link> */}
    <nav className='nave'>
      <Link to="/Home">HOME</Link>
      <Link to="/BABOUT">BABOUT</Link>
      <Link to="/BACONTACT">BACONTACT</Link>

    </nav>
    
    </div>
    </center>
    
  )
}

export default Bunty