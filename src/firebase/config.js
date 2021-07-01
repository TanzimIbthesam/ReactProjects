
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import  * as firebase from 'firbase/app'
  var firebaseConfig = {
    apiKey: "AIzaSyB6c9XBGQq-EoThS9N-IbMBXaTwQ94w4Do",
    authDomain: "firegram-d7771.firebaseapp.com",
    projectId: "firegram-d7771",
    storageBucket: "firegram-d7771.appspot.com",
    messagingSenderId: "104856183371",
    appId: "1:104856183371:web:5639c72a72d700c7eea3ce",
    measurementId: "G-G6RZR5P714"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const fireStorage=firebase.storage();
  const db=firebase.firestore();

  export {db,fireStorage};
 
