import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwfvNRqEyMPKy2E8MXFFxufedCZepcoRM",
    authDomain: "react-ecommerce-caa4a.firebaseapp.com",
    projectId: "react-ecommerce-caa4a",
    storageBucket: "react-ecommerce-caa4a.appspot.com",
    messagingSenderId: "464860541077",
    appId: "1:464860541077:web:20f05e175228563081eb9c",
    measurementId: "G-N6X5HGQ0QM"
})

const auth = firebase.auth();
export {auth};