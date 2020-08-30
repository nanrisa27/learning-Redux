import React from 'react'
import { NavLink } from 'react-router-dom';
import { logOut } from "../../store/authActions"
import { connect } from "react-redux"
import Logout from '../Authentication/Logout';

const RegisteredUser = (props) => {
    return (
        <div>
            <li><NavLink to="/Logout" onClick={props.logOut}>Logout</NavLink></li>
            <li><NavLink to="/NewPost">Create new post</NavLink></li>
            <li><NavLink onClick={props.logOut} to="/Logout" /></li>

        </div>
    )

}


const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(Logout)
    }
}



export default connect(mapDispatchToProps)(RegisteredUser);