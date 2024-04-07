// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdYH3vEULehqUbKel-AGZsoOJWmyR6-D0",
  authDomain: "dragon-news-f8b2f.firebaseapp.com",
  projectId: "dragon-news-f8b2f",
  storageBucket: "dragon-news-f8b2f.appspot.com",
  messagingSenderId: "33955028787",
  appId: "1:33955028787:web:92418768e6b2dd50026846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;