// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhhpBhNLCUbgIlWauz28XKF7M9p1um6wo",
  authDomain: "i-library-fd413.firebaseapp.com",
  projectId: "i-library-fd413",
  storageBucket: "i-library-fd413.appspot.com",
  messagingSenderId: "758696144671",
  appId: "1:758696144671:web:145291d468b040d8c04a2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;