

// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVpqedRzVAIeFvmi8zYL80o7aKZmIEbPE",
    authDomain: "partspoint-34e94.firebaseapp.com",
    projectId: "partspoint-34e94",
    storageBucket: "partspoint-34e94.firebasestorage.app",
    messagingSenderId: "938009149412",
    appId: "1:938009149412:web:76b1d1b885a20e353651f1"
  };
  

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, firestore, auth };