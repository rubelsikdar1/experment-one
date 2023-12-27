// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDZkRK4TR_eX7iPP8WYDnQ29Ler5E_QCNk",
  authDomain: "blance-calculator.firebaseapp.com",
  projectId: "blance-calculator",
  storageBucket: "blance-calculator.appspot.com",
  messagingSenderId: "671574505353",
  appId: "1:671574505353:web:f3f129fac9e87bc9041358",
  measurementId: "G-99HP35W7T6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);