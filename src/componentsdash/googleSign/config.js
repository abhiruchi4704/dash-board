
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAO0k377X_0biE-9lPD83BEn2GoC7wmoEk",
  authDomain: "dashboard-6c724.firebaseapp.com",
  projectId: "dashboard-6c724",
  storageBucket: "dashboard-6c724.appspot.com",
  messagingSenderId: "969320995991",
  appId: "1:969320995991:web:6f32210addf8b8d5f65dd2",
  measurementId: "G-703RT4XYDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};
