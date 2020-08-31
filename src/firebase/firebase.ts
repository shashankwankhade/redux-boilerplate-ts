import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyChH93S6witAdvtuuVJ_yJ5Kxk2zwn9bY8",
  authDomain: "reactdemo-64be8.firebaseapp.com",
  databaseURL: "https://reactdemo-64be8.firebaseio.com",
  messagingSenderId: "846459793721",
  projectId: "reactdemo-64be8",
  storageBucket: "reactdemo-64be8.appspot.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
