import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa--_lUbdEk-5_ckzdi1wRH3h1iSD2bTU",
  authDomain: "house-marketplace-app-50956.firebaseapp.com",
  projectId: "house-marketplace-app-50956",
  storageBucket: "house-marketplace-app-50956.appspot.com",
  messagingSenderId: "919743987234",
  appId: "1:919743987234:web:6fdc42d8f1b8803a81d47b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
