import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEVr4naVl12M-lFEQ7z-eKAP4IhgTWllI",
  authDomain: "fitpro-ed89c.firebaseapp.com",
  projectId: "fitpro-ed89c",
  storageBucket: "fitpro-ed89c.appspot.com",
  messagingSenderId: "719691087382",
  appId: "1:719691087382:web:9012c48ad89adf9a72ff37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
