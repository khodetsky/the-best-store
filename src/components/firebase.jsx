import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0VGxrybddy7-alWAf1qKKjxRmEbGSBYc",
  authDomain: "noname-digital-store.firebaseapp.com",
  projectId: "noname-digital-store",
  storageBucket: "noname-digital-store.appspot.com",
  messagingSenderId: "1090352338153",
  appId: "1:1090352338153:web:d9cff109e9ebcc477c4c78",
  measurementId: "G-S5Y17E3FXR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

setPersistence(auth, browserSessionPersistence);