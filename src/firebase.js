import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // ENTER YOUR APP'S FIREBASE CONFIG HERE
});

const auth = firebase.auth();

export { auth };
