// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import "firebase/compat/database"
import { getDatabase, ref, set } from "firebase/compat/database";




const firebaseConfig = {
  apiKey: "AIzaSyAc463PPgcmLHmBjoYLl1YffZgjt02elgo",
  authDomain: "m-city-5f9f9.firebaseapp.com",
  databaseURL: "https://m-city-5f9f9-default-rtdb.firebaseio.com",
  projectId: "m-city-5f9f9",
  storageBucket: "m-city-5f9f9.appspot.com",
  messagingSenderId: "239797866635",
  appId: "1:239797866635:web:331e6136251f933d2ec48e",
  measurementId: "G-YJ0EZ81TS4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

//Check connection database firebase
// firebaseDB.ref('matches').once('value').then((snapshot) =>{
//   console.log(snapshot.val());
// })
 
const firebaseMatches = firebaseDB.ref('matches');

export {
  firebase,
  firebaseMatches
}