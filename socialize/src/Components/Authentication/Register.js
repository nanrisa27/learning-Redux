import React, { Component } from 'react';

class Register extends Component {
  constructor(props){
    super()
    this.state={
      First_name:"",
      last_name:"",
      Email:null,
      Password:null,
      Username:null
    }
  }
  onsubmit=(e)=>{this.setState
    ({
       [e.target.id]: e.target.value
   });
 }

  render() {
    return (
      <div className="Register-container">
        <h3>Register</h3>
      <div class="row">
      <form class="col s5">
      <div class="row">
        <div class="input-field col s5">
          <input id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s5">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s5">
          <input id="Username" type="text" class="validate"/>
          <label for="Username">Username</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s5">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s5">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">Register
          
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
