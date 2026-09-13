import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyBgQmOh5Qhk6g4q0y04KQ6vuYiKJizlcDI",
  authDomain: "e-coomerce-52a5c.firebaseapp.com",
  projectId: "e-coomerce-52a5c",
  storageBucket: "e-coomerce-52a5c.firebasestorage.app",
  messagingSenderId: "1034865367780",
  appId: "1:1034865367780:web:805e396def9f4f8b7faaf1",
  measurementId: "G-05VB6TXLTT",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
