import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDctj73gO_vO_IYssMon8KhM8qA6bg0C6I",
  authDomain: "myreactnativeproject-c7956.firebaseapp.com",
  projectId: "myreactnativeproject-c7956",
  storageBucket: "myreactnativeproject-c7956.appspot.com",
  messagingSenderId: "593439096589",
  appId: "1:593439096589:web:349321d61b555825ceba44",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
