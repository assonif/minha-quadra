import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDspWP6kfjZOccg7C4YXt3t1hZHevSU8-0",
  authDomain: "minha-quadra-59abe.firebaseapp.com",
  projectId: "minha-quadra-59abe",
  storageBucket: "minha-quadra-59abe.appspot.com",
  messagingSenderId: "384354021205",
  appId: "1:384354021205:web:6471f700b2cbe98d0109dc",
  measurementId: "G-1EZVGGK6YQ"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app)