import  firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore'
import 'firebase/auth'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrtL2Dm5iC24fU77KOvCGM0PXDOyZiYqU",
    authDomain: "library-68d39.firebaseapp.com",
    databaseURL: "https://library-68d39.firebaseio.com",
    projectId: "library-68d39",
    storageBucket: "library-68d39.appspot.com",
    messagingSenderId: "574039774221",
    appId: "1:574039774221:web:1fd5a4e469ef747d6f3144"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

 export {projectStorage, projectFirestore, projectAuth}

