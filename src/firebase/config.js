import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoeWevlLfPsJql9OHdvcWl5W2CophANT4",
  authDomain: "react-demos-feb99.firebaseapp.com",
  projectId: "react-demos-feb99",
  storageBucket: "react-demos-feb99.firebasestorage.app",
  messagingSenderId: "435714380766",
  appId: "1:435714380766:web:bb62548d0d10e7ca5a834f",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const firebaseDB = getFirestore(FirebaseApp);
