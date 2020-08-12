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
               <div className="row">
                 <div className="input-field col s5">
                     <input id="email" type="email" className="validate" onChange={this.onchange}/>
                     <label htmlFor="email">Email or Username</label>
                  </div>
               </div>


          <div className="row">
            <div className="input-field col s5">
               <input id="password" type="password" className="validate"/>
               <label htmlFor="password">Password</label>
            </div>
         </div>
         

        <button className="btn waves-effect waves-light" type="submit" name="action" onSubmit={this.onsubmit}>Submit
         
        </button>
        
            
            
      </form>

            
         </div>
      );
   }
}

export default Login;









