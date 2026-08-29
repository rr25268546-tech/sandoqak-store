import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3NvbBmiX-2nBBFw-X6KBkpU_8ZOQnDvQ",
  authDomain: "sandoqak-479c4.firebaseapp.com",
  projectId: "sandoqak-479c4",
  storageBucket: "sandoqak-479c4.firebasestorage.app",
  messagingSenderId: "295608980009",
  appId: "1:295608980009:web:f3176896d1b5f461c30238",
  measurementId: "G-JKLEMJK7ZQ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
