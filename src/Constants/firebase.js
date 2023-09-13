// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKIDzKj297HEIJtk8VO2aDmGjnNAOvonI",
  authDomain: "nurani-invitation.firebaseapp.com",
  projectId: "nurani-invitation",
  storageBucket: "nurani-invitation.appspot.com",
  messagingSenderId: "668456757680",
  appId: "1:668456757680:web:1ad833e798d2d80b070e75",
  measurementId: "G-3EZYQE22ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;