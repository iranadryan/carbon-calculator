import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC1bndAWZgAH-oiwt0Ow0dzlF0ofPQYRjE',
  authDomain: 'adr-dev-b20ef.firebaseapp.com',
  projectId: 'adr-dev-b20ef',
  storageBucket: 'adr-dev-b20ef.appspot.com',
  messagingSenderId: '973078578552',
  appId: '1:973078578552:web:d05b16846bb2b224a9748d',
  measurementId: 'G-NSSR73FTW3',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
