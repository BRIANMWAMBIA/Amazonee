
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBbGGwWDs4IRJ8x10iQyL98gfB9xvAEZ74",
    authDomain: "e-a00a8.firebaseapp.com",
    projectId: "e-a00a8",
    storageBucket: "e-a00a8.appspot.com",
    messagingSenderId: "499788136342",
    appId: "1:499788136342:web:4f82265da58403c4c567b7",
    measurementId: "G-3M83VTG022"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };