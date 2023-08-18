// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6S7pqORIk5-RJXp8cl562ZlGyYKjU1O0",
  authDomain: "i-library-7e879.firebaseapp.com",
  projectId: "i-library-7e879",
  storageBucket: "i-library-7e879.appspot.com",
  messagingSenderId: "424123410000",
  appId: "1:424123410000:web:fdbfc0d851c681b5f61355",
  measurementId: "G-1VY7P9ZL9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
