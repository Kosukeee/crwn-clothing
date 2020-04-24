import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBh1Q1LW4lx-9cY_BlUaJEWe9ZEyYMvlzc",
  authDomain: "crwn-db-8f205.firebaseapp.com",
  databaseURL: "https://crwn-db-8f205.firebaseio.com",
  projectId: "crwn-db-8f205",
  storageBucket: "crwn-db-8f205.appspot.com",
  messagingSenderId: "213856979131",
  appId: "1:213856979131:web:fa5a702422cfa05001c19e",
  measurementId: "G-CDYNTQH66E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestrore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;