import React, { Component } from 'react';

class Register extends Component {
  constructor(props){
    super()
    this.state={
      
    }
  }
  /*onsubmit=(e)=>{this.setState
    ({
       [e.target.id]: e.target.value
   });
 }*/

  render() {
    return (
      <div className="Register-container">
        <h3>Register</h3>
      <div className="row">
      <form className="col s5">
      <div className="row">
        <div className="input-field col s5">
          <input id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s5">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s5">
          <input id="Username" type="text" className="validate"/>
          <label htmlFor="Username">Username</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s5">
          <input id="password" type="password" className="validate"/>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s5">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">Register
          
      </button>
    
        
      
    </form>
    </div>
  </div>
        
    );
  }
}

export default Register;








/*import React from 'react';

const Register = () => {
    return (
       
    

        
    );
}

export default Register;*/
