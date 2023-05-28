import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDAxFuyh7QSdocWQlbbni2kzXAs69uyXsQ",
  authDomain: "thedojo-defda.firebaseapp.com",
  projectId: "thedojo-defda",
  storageBucket: "thedojo-defda.appspot.com",
  messagingSenderId: "806908191491",
  appId: "1:806908191491:web:90b3870bd83df4b0a93f36"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }