import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYCQBwW6s1qE29xN-9goUi0tBMs0a33Jc",
  authDomain: "madhusudhan-909f2.firebaseapp.com",
  databaseURL: "https://madhusudhan-909f2.firebaseio.com",
  projectId: "madhusudhan-909f2",
  storageBucket: "madhusudhan-909f2.appspot.com",
  messagingSenderId: "488835263787",
  appId: "1:488835263787:web:b80e12012ade7ec811296e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;
