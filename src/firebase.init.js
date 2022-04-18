// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYpXWe70yGePBgX3_Zx9v0fYj6JUKiZds",
    authDomain: "weeding-personal-photographer.firebaseapp.com",
    projectId: "weeding-personal-photographer",
    storageBucket: "weeding-personal-photographer.appspot.com",
    messagingSenderId: "503704024058",
    appId: "1:503704024058:web:47bc842b3710e245d2aa43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
