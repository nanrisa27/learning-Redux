import React from 'react'
import Logo from './Logo';
import NonRegisteredUser from './NonRegisteredUser';
import RegisteredUser from './RegisteredUser';

class NavBar extends React.Component {
    render(){
        return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Logo></Logo>
                    { 
                        this.props.uid ? 
                        <ul className="right hide-on-med-and-down">
                            <RegisteredUser/>
                        </ul> : 
                        <ul className="right hide-on-med-and-down">
                            <NonRegisteredUser/>
                        </ul>
                    }    
                </div>    
            </nav>
        )
    }
}

export default NavBar;