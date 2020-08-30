import React, { Component } from 'react';
import NavBar from "./Components/Layout/NavBar"
//import Footer from './Components/Layout/Footer';*/
import "./App.css";
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Logout from './Components/Authentication/Logout';
import NewPost from './Components/Posts/NewPost';
//import HomePage from "./Components/Homepage/HomePage"
import Postdetails from './Components/Posts/Postdetails';
import Newsfeed from "./Components/Homepage/Newsfeed";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig";




//Initialize Firebase//

firebase.initializeApp(firebaseConfig);
firebase.analytics();



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Newsfeed} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/post/:id" component={Postdetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;












