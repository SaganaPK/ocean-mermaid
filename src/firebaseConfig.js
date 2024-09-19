// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgzyArPrDkYdTAsKcmkkdDpYc3eXd0fwY",
  authDomain: "nilanithilabirthday.firebaseapp.com",
  projectId: "nilanithilabirthday",
  storageBucket: "nilanithilabirthday.appspot.com",
  messagingSenderId: "730666870740",
  appId: "1:730666870740:web:f12d28883814ef23115841"
};

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };