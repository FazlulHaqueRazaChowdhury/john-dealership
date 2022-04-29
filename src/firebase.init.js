// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGa2KH4i0-jYXWh5WRS8StSbkimQWWKDI",
    authDomain: "john-dealership.firebaseapp.com",
    projectId: "john-dealership",
    storageBucket: "john-dealership.appspot.com",
    messagingSenderId: "364870045178",
    appId: "1:364870045178:web:96caecc5da485db8bbe843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;