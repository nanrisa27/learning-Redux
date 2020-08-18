import React from 'react'
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

class RegisteredUser extends React.Component {
    logOut = () => {
        firebase.auth().signOut()
            .then(resp => {
                console.log('User has been logged out');     
            }).catch(err => {
                console.log('Some error has occurred while logging out');
            });
    }

    render(){
        return (
            <div>
                <li><NavLink to="/logout" onClick={this.logOut}>Logout</NavLink></li> 
                <li><NavLink to="/create">Create new post</NavLink></li> 
                
            </div>
        )
    }
}

export default RegisteredUser;