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

  export const createUserProfileDocument = async (userAuth, additionalData) =>  {
    if (!userAuth) return;
    console.log({additionalData,userAuth});
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshopt = await userRef.get(); 
    console.log(snapshopt);

    if (!snapshopt.exists){
      let {displayName, email} = userAuth;
      if (!displayName && additionalData) {
        displayName = additionalData.displayName;
      }
      const createdAt = new Date();
      console.log(
        {displayName, email, createdAt, additionalData}
      );
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };



  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;