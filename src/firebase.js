import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAdJlglAbW1W1lBZtq__74NE4z5CjwYgzg",
    authDomain: "eshop-1a90b.firebaseapp.com",
    projectId: "eshop-1a90b",
    storageBucket: "eshop-1a90b.appspot.com",
    messagingSenderId: "874846265211",
    appId: "1:874846265211:web:1902a8b8fbe057fdb367de",
    measurementId: "G-1042MLR4BV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth }