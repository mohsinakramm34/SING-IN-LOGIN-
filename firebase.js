
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwna5v4ZV-4LcRSDatPiwSw_6evppTJO0",
  authDomain: "mohsinproject-1.firebaseapp.com",
  projectId: "mohsinproject-1",
  storageBucket: "mohsinproject-1.appspot.com",
  messagingSenderId: "713363676311",
  appId: "1:713363676311:web:698c6df72f9a2f59981dd2",
  measurementId: "G-3RJG0L81G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the servic
const db = getFirestore(app)
// ini// Initialize Auth
const auth = getAuth();


export {
  app, db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, setDoc, auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
}
 