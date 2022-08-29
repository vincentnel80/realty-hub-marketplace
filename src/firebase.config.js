import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTJfm_LYcVBiLRxUr6RzSPksXNH-kIzeE",
  authDomain: "realtyhub-marketplace-app.firebaseapp.com",
  projectId: "realtyhub-marketplace-app",
  storageBucket: "realtyhub-marketplace-app.appspot.com",
  messagingSenderId: "297572158475",
  appId: "1:297572158475:web:42ee2396317e7184a20b0e"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
