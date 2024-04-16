//import firebase from "firebase/app"
//import "firebase/auth"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4x9-soJVxuJTcTgeqnXGAf40-WPh8BG8",
    authDomain: "carrental-prov.firebaseapp.com",
    projectId: "carrental-prov",
    storageBucket: "carrental-prov.appspot.com",
    messagingSenderId: "504375763649",
    appId: "1:504375763649:web:19264ddaef9196e826aa40"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
