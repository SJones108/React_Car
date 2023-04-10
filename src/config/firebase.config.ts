import { initializeApp } from "firebase/app";


export const firebaseConfig = {
  apiKey: "AIzaSyDEEvdOwlhWR6HvbeAAUbwGgKGoFf97W54",
  authDomain: "reactcarinventory.firebaseapp.com",
  projectId: "reactcarinventory",
  databaseURL: "https://reactcarinventory-default-rtdb.firebaseio.com",
  storageBucket: "reactcarinventory.appspot.com",
  messagingSenderId: "764288411355",
  appId: "1:764288411355:web:5bb23590f21bf1abf2cefe",
  GoogleProvider: 'project-764288411355'
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);