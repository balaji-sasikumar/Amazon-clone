import firebase from 'firebase'
require('firebase/auth')

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIuLBx3nX9xoRZeybQY56v-z0GkxUs7aU",
    authDomain: "clone-94d71.firebaseapp.com",
    databaseURL: "https://clone-94d71.firebaseio.com",
    projectId: "clone-94d71",
    storageBucket: "clone-94d71.appspot.com",
    messagingSenderId: "57407669066",
    appId: "1:57407669066:web:78ccc6d564a4d5f6ff77b3",
    measurementId: "G-5YBGGQQ40G"
})

// const db= firebaseApp.firestore();
const auth =firebase.auth();

export {auth};