import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDikBYNgLbYCq-gnUa1TwGGmHHBSxSp4KI",
  authDomain: "unicarioca-devmob.firebaseapp.com",
  databaseURL: "https://unicarioca-devmob.firebaseio.com",
  projectId: "unicarioca-devmob",
  storageBucket: "unicarioca-devmob.appspot.com",
  messagingSenderId: "178234884836",
  appId: "1:178234884836:web:30aa90c93f8c6b1763e2f1"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}