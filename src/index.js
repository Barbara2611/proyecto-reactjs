import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX-d8k8V7zs2KgXwBNw-E2_muAU4eR-Go",
  authDomain: "proyectoreactjs-a0c8d.firebaseapp.com",
  projectId: "proyectoreactjs-a0c8d",
  storageBucket: "proyectoreactjs-a0c8d.appspot.com",
  messagingSenderId: "1076495225740",
  appId: "1:1076495225740:web:db705ae21988fbca523ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

