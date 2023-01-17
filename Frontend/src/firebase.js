import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNvSkUZkmtHPmHhdl6TWN39IZVKm0jjeA",
  authDomain: "shopify-auth-1571e.firebaseapp.com",
  projectId: "shopify-auth-1571e",
  storageBucket: "shopify-auth-1571e.appspot.com",
  messagingSenderId: "359703822052",
  appId: "1:359703822052:web:3225359962ad8f919a36f1",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
