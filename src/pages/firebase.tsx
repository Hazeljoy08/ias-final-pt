// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk1F_2YwfXmOQyODybEhiouJv0ukag3GQ",
  authDomain: "final-pt-afcf7.firebaseapp.com",
  projectId: "final-pt-afcf7",
  storageBucket: "final-pt-afcf7.appspot.com",
  messagingSenderId: "359900412410",
  appId: "1:359900412410:web:cbc1227222496eed6e4c43",
  measurementId: "G-EHVSWXKHGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
