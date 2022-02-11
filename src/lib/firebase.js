import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHA-Pasa8ipVoWB24dTTglTVdu_6UUmOA",
  authDomain: "insta-clone-f0071.firebaseapp.com",
  projectId: "insta-clone-f0071",
  storageBucket: "insta-clone-f0071.appspot.com",
  messagingSenderId: "1007226021639",
  appId: "1:1007226021639:web:da0a18c2ea394709cac7a2",
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase);
export { firebase, FieldValue };
