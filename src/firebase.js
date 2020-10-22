import firebase from "firebase";

  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-u6gZgRDurKRCBc31WlOePdznU2Jkgzk",
    authDomain: "messenger-clone-437c8.firebaseapp.com",
    databaseURL: "https://messenger-clone-437c8.firebaseio.com",
    projectId: "messenger-clone-437c8",
    storageBucket: "messenger-clone-437c8.appspot.com",
    messagingSenderId: "141605801223",
    appId: "1:141605801223:web:71ac0291a420e9df7749a2",
    measurementId: "G-FJZ01MJQSE"

});

const db = firebaseApp.firestore()
export default db;