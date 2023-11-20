// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvvFbzc8A7TXHzlTIz68paE7B-2R-nmmo",
  authDomain: "myproject-cd6da.firebaseapp.com",
  projectId: "myproject-cd6da",
  storageBucket: "myproject-cd6da.appspot.com",
  messagingSenderId: "525646130907",
  appId: "1:525646130907:web:f740bc242cebe4bcd4e6fe"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;