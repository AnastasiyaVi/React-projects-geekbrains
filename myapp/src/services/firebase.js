import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDwr9CVpH6F6CcsyWE9lgNF0oKA5zVHsrA",
    authDomain: "react-students-e67dd.firebaseapp.com",
    databaseURL: "https://react-students-e67dd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-students-e67dd",
    storageBucket: "react-students-e67dd.appspot.com",
    messagingSenderId: "965127352733",
    appId: "1:965127352733:web:8961d2130957d6dee57f74"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();


