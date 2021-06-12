import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDV86nqmkFlcZIlaPxWUQDEC4ooPgaq7NQ",
    authDomain: "notinder-38d49.firebaseapp.com",
    projectId: "notinder-38d49",
    storageBucket: "notinder-38d49.appspot.com",
    messagingSenderId: "802128454845",
    appId: "1:802128454845:web:b05a5bf2bdcdab8dfac3d4",
    measurementId: "G-D0K6FJDRFX",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;