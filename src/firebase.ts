import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTG-nnU8aEr7A4FBSHPW8yiEm8WU9HhSc",
  authDomain: "twitter-app-372f8.firebaseapp.com",
  projectId: "twitter-app-372f8",
  storageBucket: "twitter-app-372f8.appspot.com",
  messagingSenderId: "537184336890",
  appId: "1:537184336890:web:751a56eb9fac33b4428243",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
