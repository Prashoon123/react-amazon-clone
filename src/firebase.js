import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABXephydYrN-hbs7kbUclYm1rKYjDZARo",
    authDomain: "clone-5bba4.firebaseapp.com",
    databaseURL: "https://clone-5bba4.firebaseio.com",
    projectId: "clone-5bba4",
    storageBucket: "clone-5bba4.appspot.com",
    messagingSenderId: "950960671260",
    appId: "1:950960671260:web:2d979884280ca3d3b76dd9",
    measurementId: "G-EJHZRV3856",
});

const auth = firebase.auth();

export { auth };