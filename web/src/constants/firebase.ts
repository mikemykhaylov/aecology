import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeq2EfruDIGTySsbv2F_aVzad4RUm8AVk',
  authDomain: 'aecology-ebe4f.firebaseapp.com',
  projectId: 'aecology-ebe4f',
  storageBucket: 'aecology-ebe4f.appspot.com',
  messagingSenderId: '461334833210',
  appId: '1:461334833210:web:288036886afc20b957ad03',
  measurementId: 'G-DZF6PBYYED',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore();
