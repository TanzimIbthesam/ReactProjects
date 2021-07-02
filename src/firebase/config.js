
  
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyC_gWBDOsxbwrudy8afvG6KDYkjlThEEWY",
  authDomain: "firegram-7c64e.firebaseapp.com",
  projectId: "firegram-7c64e",
  storageBucket: "firegram-7c64e.appspot.com",
  messagingSenderId: "864803885336",
  appId: "1:864803885336:web:c1bdbb26d7980b0347ce6d",
  measurementId: "G-6S7M38EL9K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  
  const fireStorage=firebase.storage();
  const db=firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {db,fireStorage,timestamp};
 
