// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4-Eyo9vAIiTaouVIuA2JQpiaQH5wjN_U",
  authDomain: "candidate-pool-system-1ac6d.firebaseapp.com",
  projectId: "candidate-pool-system-1ac6d",
  storageBucket: "candidate-pool-system-1ac6d.firebasestorage.app",
  messagingSenderId: "737670423887",
  appId: "1:737670423887:web:5714e1efa90c47895f913a",
  measurementId: "G-D1S2DZNS8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);