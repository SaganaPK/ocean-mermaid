// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFAUZWqTLuXO-Urx7RpYQ3mEaTe5XEJ8Y",
  authDomain: "mermaid-invite.firebaseapp.com",
  projectId: "mermaid-invite",
  storageBucket: "mermaid-invite.appspot.com",
  messagingSenderId: "99004880447",
  appId: "1:99004880447:web:8df3571444858e955c4a8a"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };