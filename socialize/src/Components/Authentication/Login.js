import React from 'react'

const Login =()=> {
    return (
       <div className="Container">
         <form>
          <div class="row">
            <div class="input-field col s8">
               <input id="password" type="password" class="validate"/>
               <label for="password">Password</label>
            </div>
         </div>
         <div class="row">
           <div class="input-field col s8">
              <input id="email" type="email" class="validate"/>
              <label for="email">Email or Username</label>
           </div>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
        
            
            
      </form>
  </div>
    )
}

export default Login
