// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_CH1uEWUcOtbJAFsirdL229uZyVSlSrs",
  authDomain: "vstore-21080.firebaseapp.com",
  projectId: "vstore-21080",
  storageBucket: "vstore-21080.appspot.com",
  messagingSenderId: "294605859702",
  appId: "1:294605859702:web:58ab2ff153e5d93b176857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);