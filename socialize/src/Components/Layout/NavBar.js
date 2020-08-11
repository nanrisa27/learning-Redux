import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../Layout/Logo";
 

const NavBar = () => {
    return (
            

        <nav>
          <div className="nav-wrapper">
            <Logo/>
            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/Login">Login</Link></li>
              <li> <Link to="/Register">Register</Link></li>
              <li><Link to="/Logout">Logout</Link></li>
                
               
                
                
          </ul>
        </div>
      </nav>
            
            
        
    );
}

export default NavBar;
