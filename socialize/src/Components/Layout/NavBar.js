import React from 'react';
import Logo from "../Layout/Logo";
import RegisteredUser from './RegisteredUser';
import NonRegisteredUser from './NonRegisteredUser';
 

const NavBar = () => {
    return (
            

        <nav>
          <div className="nav-wrapper">
            <Logo/>
            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <RegisteredUser/>
              <NonRegisteredUser/>
                
               
                
                
          </ul>
        </div>
      </nav>
            
            
        
    );
}

export default NavBar;
