// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQWCFSmNPnlxjsaj9LL3mYkA-2jqM5Vg0",
  authDomain: "netflixcgpt.firebaseapp.com",
  projectId: "netflixcgpt",
  storageBucket: "netflixcgpt.firebasestorage.app",
  messagingSenderId: "6964395514",
  appId: "1:6964395514:web:2ffa3f980d210406e3f843",
  measurementId: "G-H2T2TPHLEH",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export const auth = getAuth();
