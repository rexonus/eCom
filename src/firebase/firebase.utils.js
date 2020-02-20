import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5SZsmGXPi8VjWGdQi9DLbh74Z8uXy4zM",
    authDomain: "ecom-firebase.firebaseapp.com",
    databaseURL: "https://ecom-firebase.firebaseio.com",
    projectId: "ecom-firebase",
    storageBucket: "ecom-firebase.appspot.com",
    messagingSenderId: "982567815875",
    appId: "1:982567815875:web:230f98ef58807c5f96b076"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;