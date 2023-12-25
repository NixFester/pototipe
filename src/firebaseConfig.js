import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeqsEzveBgxLAJOlg0JAksPKB6AT21y5k",
    authDomain: "testprofject.firebaseapp.com",
    projectId: "testprofject",
    storageBucket: "testprofject.appspot.com",
    messagingSenderId: "145757727264",
    appId: "1:145757727264:web:9032204317f126577b6a45",
    measurementId: "G-BR4Q4FT69T"
  };


export const app = initializeApp(firebaseConfig);
export const database =getFirestore(app)

export const auth = getAuth();
  