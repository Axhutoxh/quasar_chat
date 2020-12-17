import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCqFUI0NcNok0stRBxGUG8dorzpXn5qE5M",
  authDomain: "quasar-chat-ab978.firebaseapp.com",
  projectId: "quasar-chat-ab978",
  storageBucket: "quasar-chat-ab978.appspot.com",
  messagingSenderId: "854060207160",
  appId: "1:854060207160:web:e89d88d521c4025b86aacd",
  measurementId: "G-0Y8YX4T5PB"
};
// // Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()


export{
  firebaseAuth,firebaseDb
}
