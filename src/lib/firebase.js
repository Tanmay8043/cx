// Import the functions you need from the SDKs you need
import { defaults } from "autoprefixer";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB39hOs2w_-epfV6hMMmJbEllg_0ttPHxY",
  authDomain: "test-e60e3.firebaseapp.com",
  projectId: "test-e60e3",
  storageBucket: "test-e60e3.appspot.com",
  messagingSenderId: "237628209348",
  appId: "1:237628209348:web:d16ec12e274d841f38b191",
  measurementId: "G-Z6QH1PCV85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};