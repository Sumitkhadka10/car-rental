// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"; // Import collection function

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVBO1Ps4CC_9OJSBx8gOidNdD40jRnTCM",
  authDomain: "fir-carrental-96b87.firebaseapp.com",
  projectId: "fir-carrental-96b87",
  storageBucket: "fir-carrental-96b87.appspot.com",
  messagingSenderId: "4684508429",
  appId: "1:4684508429:web:84a6605f7b4d5674d8d444",
  measurementId: "G-TSW615GMVP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db, collection }; // Export collection function along with other Firebase utilities