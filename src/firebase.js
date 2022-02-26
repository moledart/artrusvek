// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7jtRKvmLTEgbFjdnPVmyibYWIePWvpwI",
  authDomain: "artrusvek.firebaseapp.com",
  databaseURL: "https://artrusvek-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "artrusvek",
  storageBucket: "artrusvek.appspot.com",
  messagingSenderId: "194256040302",
  appId: "1:194256040302:web:d7a42eaa393b602358917f",
  measurementId: "G-05G3QNBV8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
