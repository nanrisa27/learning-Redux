import React, { Component } from 'react';

class Login extends Component {
   constructor(props){
      super(props);
      this.state={
         Email: null,
         Password: null
      }
 
      
   };
   onsubmit=(e)=>{this.setState
      ({
         [e.target.id]: e.target.value
     });
   }

   onchange=(e)=>{
       e.preventDefault();
      console.log(this.state);
   }
    

   render() {
      return (
         <div className="Login-container">
            <h3>Login</h3>
            <form>
               <div class="row">
                 <div class="input-field col s5">
                     <input id="email" type="email" class="validate" onChange={this.onchange}/>
                     <label for="email">Email or Username</label>
                  </div>
               </div>


          <div class="row">
            <div class="input-field col s5">
               <input id="password" type="password" class="validate"/>
               <label for="password">Password</label>
            </div>
         </div>
         

        <button class="btn waves-effect waves-light" type="submit" name="action" onSubmit={this.onsubmit}>Submit
         
        </button>
        
            
            
      </form>

            
         </div>
      );
   }
}

export default Login;









