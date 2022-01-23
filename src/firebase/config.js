import firebase from 'firebase.app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtBEEdhzUyH0hfQc1xY9pcO1McOCDNW88",
  authDomain: "project-manager-9cb5e.firebaseapp.com",
  projectId: "project-manager-9cb5e",
  storageBucket: "project-manager-9cb5e.appspot.com",
  messagingSenderId: "957559084014",
  appId: "1:957559084014:web:65d223e80e04c46cd5b4ff"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firebase.timestamp

export { projectFirestore, projectAuth }