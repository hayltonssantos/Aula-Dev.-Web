// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSlZKCxM1R29Q41AuH6ksX2AR-r_ED5bk",
    authDomain: "flashcarddevweb-d761b.firebaseapp.com",
    projectId: "flashcarddevweb-d761b",
    storageBucket: "flashcarddevweb-d761b.appspot.com",
    messagingSenderId: "685181127695",
    appId: "1:685181127695:web:9631e6e743ece0e28b277a",
    measurementId: "G-Z5KB9JNS43"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;