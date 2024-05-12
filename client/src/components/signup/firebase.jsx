import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA59-BMVXiHwFbBybrCjeCNplFpd3qGC54",
  authDomain: "project-vroom-d473b.firebaseapp.com",
  projectId: "project-vroom-d473b",
  storageBucket: "project-vroom-d473b.appspot.com",
  messagingSenderId: "539495418223",
  appId: "1:539495418223:web:f6e6d7ea51b03f889e009a",
  measurementId: "G-WEG74BX3DL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth=getAuth();
export const db=getFirestore(app);
export default app;