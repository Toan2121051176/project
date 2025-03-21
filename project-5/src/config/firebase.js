// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGGCgdPNNfCI9rQcGB3Xw-12EGi-rETKM",
  authDomain: "vite-contact-b624e.firebaseapp.com",
  projectId: "vite-contact-b624e",
  storageBucket: "vite-contact-b624e.firebasestorage.app",
  messagingSenderId: "941130374154",
  appId: "1:941130374154:web:0396bdb99695e3ce4c13f3",
  measurementId: "G-KM8L6SXVFX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);