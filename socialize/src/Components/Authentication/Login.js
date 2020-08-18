import React, { Component } from 'react';
//import userActions from "../UserActions/UserActions"
import firebase from "firebase";





class Login extends Component {
   constructor(props){
      super(props);
      this.state={
         email: "",
         Password: "",
         submitted:false
         
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      
   };

   handleSubmit = (e) => {
    e.preventDefault();

    firebase.auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
    ).then(() => {
        console.log('Login success');
    }).catch(err => {
        console.log('Login failed: ' + err);
    });
}
   /*handleSubmit=(e)=>{this.setState
      ({
         [e.target.id]: e.target.value
         
     });
     this.setState({ submitted: true });
        const { email, password, } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));}
   }*/

   handleChange=(e)=>{
       e.preventDefault();
      console.log(this.state);
      
   };


   render(){
    return (
        <div className="container">
            <form onSubmit={this.handleSubmission}>
                <div className="input-field">
                    <input id="email" type="text" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="email">Email:</label>
                </div>
                <div className="input-field">
                    <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Log In</button>
            </form>
        </div>
    )
}
} 

  

  
export default Login;






            


