
import './navbar.css';
import { FaHome ,FaBars , FaEnvelope , FaChild ,FaInfo  } from 'react-icons/fa';

function Navbar(){

   
    return (
      <div className='nav'>
        <ul>
          <li className='active'><FaHome/> Home</li>
          <li><FaInfo/> About</li>
          <li><FaBars/> Menu</li>
          <li><FaEnvelope/> Subscribe</li>
          <li><FaChild/> Kids</li>
        </ul>
      </div>
    );
    };
  

  export default Navbar;
  