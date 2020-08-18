import React from 'react'
//import firebase from 'firebase';//

class Logout extends React.Component {
    render(){      
        return (
            <div className="container">
                {
                    this.props.uid ? 
                    <p>Something went wrong </p> : 
                    <p>You have sucessfuly logged out</p>
                } 
            </div> 
        );
    }
}

export default Logout;

