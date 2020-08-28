import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import reducer from './store/reducer';
import { Provider } from "react-redux";
import { applyMiddleware, compose } from 'redux'; //new
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore' // new
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase' // new
import firebase from 'firebase/app' // new
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig' // new


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })), // new
    reduxFirestore(firebase, firebaseConfig) // new
  )
);



ReactDOM.render(<Provider store={store}>
  <ReactReduxFirebaseProvider
    firebase={firebase} // new
    config={firebaseConfig} // new
    dispatch={store.dispatch} // new
    createFirestoreInstance={createFirestoreInstance} // new
  >


    <App />

  </ReactReduxFirebaseProvider>

</Provider>

  , document.getElementById('root'));

