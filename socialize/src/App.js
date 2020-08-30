import React, { Component } from 'react';
import NavBar from "./Components/Layout/NavBar"
//import Footer from './Components/Layout/Footer';*/
import "./App.css";
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Logout from './Components/Authentication/Logout';
import NewPost from './Components/Posts/NewPost';
import Postdetails from './Components/Posts/Postdetails';
import Newsfeed from "./Components/Homepage/Newsfeed";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig";




//Initialize Firebase//

firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: firebase.auth().currentUser
    };
  }

  componentDidMount = () => {
    this.setState({
      uid: firebase.auth().currentUser ? firebase.auth().currentUser.uid : null
    });

    firebase.auth().onAuthStateChanged(user => {
      // only executes when there has been changes to the user login status

      // user is now logged in, previously not
      if (user && this.state.uid === null) {
        this.setState({
          uid: user.uid
        })

        // user is now not logged in, and previously was
      } else if (!user && this.state.uid !== null) {
        this.setState({
          uid: null
        })
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <NavBar uid={this.state.uid} />

            <Switch>
              <Route exact path="/" render={() => {
                return <Newsfeed uid={this.state.uid} />
              }}></Route>

              <Route exact path="/create" render={() => {
                return <NewPost uid={this.state.uid} />
              }}></Route>

              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>

              <Route exact path="/logout" render={() => {
                return <Logout uid={this.state.uid} />
              }}></Route>
              <Route exact path="/post/:id" component={Postdetails}></Route>
              <Redirect from="*" to="/" />

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;












