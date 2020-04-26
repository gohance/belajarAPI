import * as firebase from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyD8NycqNA0F0EZFfsi486AvlPBQMIcwNAQ",
    authDomain: "catato-ccfaa.firebaseapp.com",
    databaseURL: "https://catato-ccfaa.firebaseio.com",
    projectId: "catato-ccfaa",
    storageBucket: "catato-ccfaa.appspot.com",
    messagingSenderId: "337860057541",
    appId: "1:337860057541:web:4b6b22586a2db5b1c553ac",
    measurementId: "G-2D40JPF3K4"
  };

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
