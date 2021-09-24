import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMC3gpFyYI5i_ZNpxnTQpztiHTJeqEYTg",
    authDomain: "challenge-1a84b.firebaseapp.com",
    projectId: "challenge-1a84b",
    storageBucket: "challenge-1a84b.appspot.com",
    messagingSenderId: "506747683914",
    appId: "1:506747683914:web:fea47a2f90cb56917412b3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };