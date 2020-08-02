import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/Firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVNGfwO-ORhxYnIIVQKng5zNPvDe9P-sU",

    authDomain: "hm-img-gallery.firebaseapp.com",
    databaseURL: "https://hm-img-gallery.firebaseio.com",
    projectId: "hm-img-gallery",
    storageBucket: "hm-img-gallery.appspot.com",
    messagingSenderId: "175326455225",
    appId: "1:175326455225:web:f9c02b994dd5d6eaccc268"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();