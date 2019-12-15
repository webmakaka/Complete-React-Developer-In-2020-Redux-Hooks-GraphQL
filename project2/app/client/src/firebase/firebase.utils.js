import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBUQxjoNETF6mm8A0b-xZDnw2R8AZuhrVI',
  authDomain: 'complete-react-developer-2020.firebaseapp.com',
  databaseURL: 'https://complete-react-developer-2020.firebaseio.com',
  projectId: 'complete-react-developer-2020',
  storageBucket: 'complete-react-developer-2020.appspot.com',
  messagingSenderId: '940689300931',
  appId: '1:940689300931:web:5fd1d63f752a0450d33176'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
