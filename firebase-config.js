import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7jtRKvmLTEgbFjdnPVmyibYWIePWvpwI",
  authDomain: "artrusvek.firebaseapp.com",
  databaseURL:
    "https://artrusvek-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "artrusvek",
  storageBucket: "artrusvek.appspot.com",
  messagingSenderId: "194256040302",
  appId: "1:194256040302:web:d7a42eaa393b602358917f",
  measurementId: "G-05G3QNBV8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
