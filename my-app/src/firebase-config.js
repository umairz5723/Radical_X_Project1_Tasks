import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


//Firebase object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "test-24924.firebaseapp.com",
  projectId: "test-24924",
  storageBucket: "test-24924.appspot.com",
  messagingSenderId: "769608854021",
  appId: "1:769608854021:web:122bd9e64879258aee0a6c",
  measurementId: "G-0L7MDJBC6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);