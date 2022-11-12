// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyANksQc33Mj5iuvhs4gZmUiZj53SfAORjc",

  authDomain: "chata-27aa7.firebaseapp.com",

  projectId: "chata-27aa7",

  storageBucket: "chata-27aa7.appspot.com",

  messagingSenderId: "240617481403",

  appId: "1:240617481403:web:2ebf8eab3e783075e0f59e"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)