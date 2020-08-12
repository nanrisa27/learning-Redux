import React from 'react';
import NavBar from "./Components/Layout/NavBar"
//import Footer from './Components/Layout/Footer';*/
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Logo from './Components/Layout/Logo';
import Logout from './Components/Authentication/Logout';
import NewPost from './Components/Posts/NewPost';
import Newsfeed from "./Components/Homepage/Newsfeed"
import PostDetails from './Components/Posts/PostDetails';
import NonRegisteredUser from './Components/Layout/NonRegisteredUser';


function App() {
  return (
     <div>
      <Router>
    
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/"  component={Logo}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/Logout" component={Logout}/>
            <Route exact path="/NewPost" component={NewPost}/>
            <Route exact path="/Post/:id" component={PostDetails}/>
            <Route exact path="/NonRegistredUser" component={NonRegisteredUser}/>
            
          </Switch>     

         
    
        
       
     

        
       
    
        </div>
  </Router>
  <Newsfeed/>

  </div>
  );
}

export default App;
