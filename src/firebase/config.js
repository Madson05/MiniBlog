//// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2-kcC4MPzppPuutXa-4fCdxtwaGA0pFo",
  authDomain: "miniblog-18de6.firebaseapp.com",
  projectId: "miniblog-18de6",
  storageBucket: "miniblog-18de6.appspot.com",
  messagingSenderId: "457118240840",
  appId: "1:457118240840:web:d9a3a9439135f8dd62487d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};