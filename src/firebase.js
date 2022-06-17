import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/database"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3PXpra8LLdFKKfztqjco_MTvNY2BPilc",
    authDomain: "challenge-29c9f.firebaseapp.com",
    projectId: "challenge-29c9f",
    storageBucket: "challenge-29c9f.appspot.com",
    messagingSenderId: "97971434349",
    appId: "1:97971434349:web:4c6d4b743e104cba86a064",
    measurementId: "G-VY8TST50FD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
