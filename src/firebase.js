import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDlhiJQh-C1O6XbdQmAaNUThf0HPIMj_aw",
  authDomain: "jobfinder-56063.firebaseapp.com",
  projectId: "jobfinder-56063",
  storageBucket: "jobfinder-56063.appspot.com",
  messagingSenderId: "150431484405",
  appId: "1:150431484405:web:2eb0fbb99c64a3ce23f8bc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
export const db=firebase.firestore();
