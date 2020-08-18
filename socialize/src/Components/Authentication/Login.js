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

  

  /* render() {
    //const { loggingIn } = this.props;
    //const { email, password, submitted } = this.state;
      return (
         <div className="Login-container">
            <h3>Login</h3>
            <form>
               <div className="row">
                 <div className="input-field col s5">
                     <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={password} onChange={this.handleChange} />
                        {submitted && !email &&
                         <div className="help-block">Email is required</div>
                        }
                    </div>
                 </div>
               </div>


          <div className="row">
            <div className="input-field col s5">
               <input id="password" type="password" className="validate" value={password} onChange={this.handleChange} />
               <label htmlFor="password">Password</label>
            </div>
         </div>
         <div className="form-group">
            <button className="btn btn-primary">Login</button>
                {loggingIn}
            
        </div>
         

        
        
            
            
      </form>

            
         </div>
      );
   }
}*/

//const Auth = firebase.auth(); //

export default Login;






            


