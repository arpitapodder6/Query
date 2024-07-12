
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBGtjdzYQ60dDaDd-7747vzEy7Ucm5Yp28",
  authDomain: "quora-clone-bf8f0.firebaseapp.com",
  projectId: "quora-clone-bf8f0",
  storageBucket: "quora-clone-bf8f0.appspot.com",
  messagingSenderId: "409998132338",
  appId: "1:409998132338:web:9442e83eea0687986b2eeb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)

