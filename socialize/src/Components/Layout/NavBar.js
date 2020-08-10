import React, { Component } from 'react'
import Logo from "../Layout/Logo"

export default class NavBar extends Component {
    render() {
        return (
            <nav>
              <div class="nav-wrapper">
                 <Logo/>
                 <ul id="nav-mobile" class="right hide-on-med-and-down">
                   <li><a href="sass.html">Login</a></li>
                   <li><a href="badges.html">Register</a></li>
                   <li><a href="collapsible.html">Logout</a></li>
                 </ul>
      
            
              </div>
            </nav>

            
            
        )
    }
}
