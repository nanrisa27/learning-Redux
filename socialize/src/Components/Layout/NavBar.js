import React from 'react'
import Logo from './Logo';
import NonRegisteredUser from './NonRegisteredUser';
import RegisteredUser from './RegisteredUser';
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase"

class NavBar extends React.Component {
    render() {
        const { auth, profile } = this.props;
        const links = auth.uid ? <RegisteredUser profile={profile} /> : <NonRegisteredUser />
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Logo />

                    <ul className="right hide-on-med-and-down">
                        {isLoaded(auth) && links}
                    </ul> :


                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);