// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-74cf9.firebaseapp.com",
  projectId: "mern-estate-74cf9",
  storageBucket: "mern-estate-74cf9.appspot.com",
  messagingSenderId: "343117663296",
  appId: "1:343117663296:web:c54d64ff5b6630b09a63a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);