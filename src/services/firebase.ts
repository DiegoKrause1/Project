import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCBO7D-yzQBfDnl-583dFMizzQALuTPoLY",
  authDomain: "project-27f31.firebaseapp.com",
  projectId: "project-27f31",
  storageBucket: "project-27f31.appspot.com",
  messagingSenderId: "374942095127",
  appId: "1:374942095127:web:e095581616093e458e8952"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();