import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Logo extends Component {
    render() {
        return (
            <div className="brand-logo">
                
                <Link to= "/">Logo</Link>
               
            </div>
        );
    }
}

export default Logo;
