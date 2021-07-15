import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase, FieldValue } from './config/firebase.js';
import FirebaseContext from './context/firebase';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
  <App />
</FirebaseContext.Provider>,
  document.getElementById('root')
);


