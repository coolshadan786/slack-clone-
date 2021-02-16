import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLRDXejGHr43Ym5R3BsmY6EqMZqI6RxTc',
  authDomain: 'slack-clone-eca1f.firebaseapp.com',
  projectId: 'slack-clone-eca1f',
  storageBucket: 'slack-clone-eca1f.appspot.com',
  messagingSenderId: '1086612031455',
  appId: '1:1086612031455:web:d10454569cef5b0283e66a',
  measurementId: 'G-QQ95L3ZECN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
