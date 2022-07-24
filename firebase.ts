// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyNqegubN3Ur7m3yqnYXqAlJ-6PC8jYf0",
  authDomain: "netflix-react-bcbd1.firebaseapp.com",
  projectId: "netflix-react-bcbd1",
  storageBucket: "netflix-react-bcbd1.appspot.com",
  messagingSenderId: "971917698653",
  appId: "1:971917698653:web:3318e5196c87ac8c6f0fb4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
