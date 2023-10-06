// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ3Z2qL4aSb_I9mohadl4FPPFeyFluq2M",
  authDomain: "social-events-project.firebaseapp.com",
  projectId: "social-events-project",
  storageBucket: "social-events-project.appspot.com",
  messagingSenderId: "997811791835",
  appId: "1:997811791835:web:1c94cc56b753d994b5e9fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);