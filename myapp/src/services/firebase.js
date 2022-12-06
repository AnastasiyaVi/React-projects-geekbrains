import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5pyQP96iqLP17YnSmAcMbUieT-WZsrv8",
  authDomain: "nastyona-react-gb.firebaseapp.com",
  databaseURL: "https://nastyona-react-gb-default-rtdb.firebaseio.com",
  projectId: "nastyona-react-gb",
  storageBucket: "nastyona-react-gb.appspot.com",
  messagingSenderId: "659548062977",
  appId: "1:659548062977:web:9fbe9979fb1d853ef7c700",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firebaseSignOut(auth);
};
