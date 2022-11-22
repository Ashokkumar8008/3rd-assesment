import logo from './logo.svg';
import './App.css';
import Ashok from './componts/Ashok/Ashok';
import Bunty from './componts/Bunty/Bunty';
import Sai from './componts/Sai/Sai';
import Yashwanth from './componts/Yashwanth/Yashwanth';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './componts/Home';
import AABOUT from './componts/Ashok/AABOUT';
import AACONTACT from './componts/Ashok/AACONTACT';
import BABOUT from './componts/Bunty/BABOUT';
import BCONTACT from './componts/Bunty/BCONTACT';
import SABOUT from './componts/Sai/SABOUT';
import SCONTACT from './componts/Sai/SCONTACT';
import YABOUT from './componts/Yashwanth/YABOUT';
import YCONTACT from './componts/Yashwanth/YCONTACT';
function App() {
  return (
    <div className="xyram">
     <h1 className='name'>XYRAM SOFTWARE SOLUTIONS PVT.LTD.</h1>

     <BrowserRouter>
     <h2>Employees List</h2>
     <nav className='nave'>
      <ul>
        <li>
          <Link to="/Ashok"><b>ASHOK</b></Link>
        </li>
        <li>
          <Link to="/Bunty"><b>BUNTY</b></Link>
        </li>
         <li>
          <Link to="/Sai"><b>SAI</b></Link>
        </li>
         <li>
          <Link to="/Yashwanth"><b>YASHWANTH</b></Link>
        </li>
      </ul> 
     </nav>
     <Routes>
     <Route exact path="/Home" element={<Home />}></Route>
     <Route exact path="/AABOUT" element={<AABOUT />}></Route>
     <Route exact path="/AACONTACT" element={<AACONTACT />}></Route>
     <Route exact path="/BABOUT" element={<BABOUT/>}></Route>
     <Route exact path="/BCONTACT" element={<BCONTACT/>}></Route>
     <Route exact path="/SABOUT" element={<SABOUT/>}></Route>
     <Route exact path="/SCONTACT" element={<SCONTACT/>}></Route>
     <Route exact path="/YABOUT" element={<YABOUT/>}></Route>
     <Route exact path="/YCONTACT" element={<YCONTACT/>}></Route>
     <Route exact path="ashok" element={<Ashok />}></Route>
     <Route exact path="Bunty" element={<Bunty />}></Route>
     <Route exact path="sai" element={<Sai />}></Route>
     <Route exact path="yashwanth" element={<Yashwanth />}></Route>
     </Routes>
    
     </BrowserRouter>
     <h1 className='ram'>XYRAM</h1>
     <h3 className='care'>We Care.....</h3>
    </div>

  );
}

export default App;
