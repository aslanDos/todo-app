import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1idx3vSUGjkwfYMiiKu6MW723Cv5BBFU",
  authDomain: "todo-app-8793f.firebaseapp.com",
  projectId: "todo-app-8793f",
  storageBucket: "todo-app-8793f.firebasestorage.app",
  messagingSenderId: "1004342296906",
  appId: "1:1004342296906:web:20c8612ffef97f406681b3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);