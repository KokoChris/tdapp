import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyD_LL8Y-CHJkmA6X1JP4q5gBrMPIikaCgE",
    authDomain: "kokotodo-2cb2b.firebaseapp.com",
    databaseURL: "https://kokotodo-2cb2b.firebaseio.com",
    storageBucket: "kokotodo-2cb2b.appspot.com",
    messagingSenderId: "920517834754"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

