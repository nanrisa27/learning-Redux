import React, { Component } from 'react';
import{NavLink} from "react-router-dom";

class NonRegisteredUser extends Component {
    render() {
        return (
            <div>
                <ul>
                 <li><NavLink to="/Login">Login</NavLink></li>
                 <li> <NavLink to="/Register">Register</NavLink></li>
              </ul>
                
            </div>
        );
    }
}

export default NonRegisteredUser;
