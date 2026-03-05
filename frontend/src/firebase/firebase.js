// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBaf2LEs4_rq_hErSXtckeoJeF76hdjfSw",
//   authDomain: "fileflux-5d46b.firebaseapp.com",
//   projectId: "fileflux-5d46b",
//   storageBucket: "fileflux-5d46b.firebasestorage.app",
//   messagingSenderId: "732469770947",
//   appId: "1:732469770947:web:9ffceb51214cf053434076"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaf2LEs4_rq_hErSXtckeoJeF76hdjfSw",
  authDomain: "fileflux-5d46b.firebaseapp.com",
  projectId: "fileflux-5d46b",
  storageBucket: "fileflux-5d46b.firebasestorage.app",
  messagingSenderId: "732469770947",
  appId: "1:732469770947:web:9ffceb51214cf053434076"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);