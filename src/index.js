import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBBrMzgt9CKUYh2RW2cfsBCg0FU8j9yWQ0",
  authDomain: "chat-react-83831.firebaseapp.com",
  projectId: "chat-react-83831",
  storageBucket: "chat-react-83831.appspot.com",
  messagingSenderId: "561732727703",
  appId: "1:561732727703:web:5127eaea55a011a4cf4ad2",
  measurementId: "G-JZRVCRYFMS"
})

export const Context = createContext(null);

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>
  ,
  document.getElementById('root')
);