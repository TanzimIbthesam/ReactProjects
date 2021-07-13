// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/firestore'
  var firebaseConfig = {
    apiKey: "AIzaSyCzbaKn0QY3FpM67eMtKSiOMV8GCkYlLiw",
    authDomain: "react-auth-10fe2.firebaseapp.com",
    projectId: "react-auth-10fe2",
    storageBucket: "react-auth-10fe2.appspot.com",
    messagingSenderId: "367078542799",
    appId: "1:367078542799:web:bc2fa5d77fec590d5cd6ba",
    measurementId: "G-XQ4TVTJSYV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  const db=firebase.firestore();

  export {auth,db};
