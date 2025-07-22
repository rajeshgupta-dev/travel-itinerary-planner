import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAuPVe6Rfv_MHtHdBeCH_KC_hw-NvCPabI",
  authDomain: "fiberbasedatabase.firebaseapp.com",
  projectId: "fiberbasedatabase",
  storageBucket: "fiberbasedatabase.firebasestorage.app",
  messagingSenderId: "485261121411",
  appId: "1:485261121411:web:2ea124a54f919f409b48b6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);