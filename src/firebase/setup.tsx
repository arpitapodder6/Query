
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import process from "process";


const apiKey = `${process.env.REACT_APP_FIREBASE_API_KEY}`;
const authDomain = `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`;
const projectId = `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`;
const storageBucket = `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`;
const messagingSenderId = `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`;
const appId = `${process.env.REACT_APP_FIREBASE_APP_ID}`;



const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)

console.log("Firebase API:" , firebaseConfig);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_ID 
// };