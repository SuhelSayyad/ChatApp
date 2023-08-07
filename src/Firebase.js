// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBd6rOvOpONe3tJEzde6rs-5-rzSdVWxVQ",
  authDomain: "prime-chatapp.firebaseapp.com",
  projectId: "prime-chatapp",
  storageBucket: "prime-chatapp.appspot.com",
  messagingSenderId: "235427008492",
  appId: "1:235427008492:web:31fb3e94333a028900fac9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);