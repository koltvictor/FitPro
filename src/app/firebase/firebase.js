import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEVr4naVl12M-lFEQ7z-eKAP4IhgTWllI",
  authDomain: "fitpro-ed89c.firebaseapp.com",
  projectId: "fitpro-ed89c",
  storageBucket: "fitpro-ed89c.appspot.com",
  messagingSenderId: "719691087382",
  appId: "1:719691087382:web:9012c48ad89adf9a72ff37",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = getAuth();
const firestore = getFirestore();

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  firestore,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  doc,
  firebaseConfig,
  firebase,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
};
