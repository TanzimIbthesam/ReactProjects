
  
  
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCm4lwQOiUeilm9CRQEN1QtahChAWGAa1o",
    authDomain: "react-instagram-4121a.firebaseapp.com",
    projectId: "react-instagram-4121a",
    storageBucket: "react-instagram-4121a.appspot.com",
    messagingSenderId: "79616038440",
    appId: "1:79616038440:web:e49f2469fe0e8c7f54871d",
    measurementId: "G-2T5NXP5Y1D"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore();
// seedDatabase(firebase)
export { firebase, FieldValue };