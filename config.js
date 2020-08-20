import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCi9a5P79gfSiRD-BZcp0pKYoYj9mlbn_w",
  authDomain: "book-santa-74c8d.firebaseapp.com",
  databaseURL: "https://book-santa-74c8d.firebaseio.com",
  projectId: "book-santa-74c8d",
  storageBucket: "book-santa-74c8d.appspot.com",
  messagingSenderId: "1048284100014",
  appId: "1:1048284100014:web:31f333ffc49f782f2cc43f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
