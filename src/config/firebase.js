// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyf0rXwwOe6IKZlau-U5tX8dIugYhBHTI",
  authDomain: "tiktok-clone-betinartestation.firebaseapp.com",
  projectId: "tiktok-clone-betinartestation",
  storageBucket: "tiktok-clone-betinartestation.appspot.com",
  messagingSenderId: "340980831687",
  appId: "1:340980831687:web:c97a75f41bbf212ef9f5e2"
};

// Inicializa a firebase 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;