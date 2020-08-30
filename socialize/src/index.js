import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import reducer from './store/reducer';
import { Provider } from "react-redux";
import { applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore' // new
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import { FIREBASE_CONFIG as firebaseConfig } from './config/firebaseConfig'


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, firebaseConfig)
  )
);



ReactDOM.render(<Provider store={store}>
  <ReactReduxFirebaseProvider
    firebase={firebase}
    config={firebaseConfig}
    dispatch={store.dispatch}
    createFirestoreInstance={createFirestoreInstance}
  >


    <App />

  </ReactReduxFirebaseProvider>

</Provider>

  , document.getElementById('root'));

