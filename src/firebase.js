
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCc7lraS-G-mYAT1ZdDnATo17gK6rv2GZI",
  authDomain: "productsproject-e0541.firebaseapp.com",
  projectId: "productsproject-e0541",
  storageBucket: "productsproject-e0541.firebasestorage.app",
  messagingSenderId: "755321128936",
  appId: "1:755321128936:web:ded9e43e9ce6837767c65d",
  databaseURL: "https://productsproject-e0541-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
