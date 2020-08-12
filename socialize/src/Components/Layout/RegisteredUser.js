import React, { Component } from 'react';
import{Link} from "react-router-dom";

class RegisteredUser extends Component {
    render() {
        return (
            <div>
               <ul>
              <li><Link to="/Logout">Logout</Link></li>
              </ul>
            </div>
        );
    }
}

export default RegisteredUser;
