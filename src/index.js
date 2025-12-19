import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD1-RQ3Tu1eipaQAIOLgwMzG6mIOLh1C4E',

  authDomain: 'reservas-house.firebaseapp.com',

  projectId: 'reservas-house',

  storageBucket: 'reservas-house.firebasestorage.app',

  messagingSenderId: '775585397212',

  appId: '1:775585397212:web:0e453ec31b0416f8fb3719',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
