// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKXmQ_CLI74ti8XyI7dqH2q6-oSuw1I3Q",
    authDomain: "fir-d9aa9.firebaseapp.com",
    projectId: "fir-d9aa9",
    storageBucket: "fir-d9aa9.appspot.com",
    messagingSenderId: "576111340673",
    appId: "1:576111340673:web:c1c96997eba4f95ee5f180",
    measurementId: "G-V2Z2RCWGW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const docRef = getFirestore(app);