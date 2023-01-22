import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDmByt8hxIZs0hMrYqRAK9GGNQbJvY3a7w",
    authDomain: "newchat-75cef.firebaseapp.com",
    projectId: "newchat-75cef",
    storageBucket: "newchat-75cef.appspot.com",
    messagingSenderId: "1006765320832",
    appId: "1:1006765320832:web:e6e37c3bb20c1fec5fd465"
} 


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();