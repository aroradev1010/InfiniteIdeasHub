// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "infiniteideashub-7262f.firebaseapp.com",
  projectId: "infiniteideashub-7262f",
  storageBucket: "infiniteideashub-7262f.appspot.com",
  messagingSenderId: "799613988227",
  appId: "1:799613988227:web:1d4152d83bb36d3c039ab6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
