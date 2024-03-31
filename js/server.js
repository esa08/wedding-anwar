// Import the functions you need from the SDKs you need
import { initializeApp } from "../@firebase/app";
import { getAnalytics } from "../@firebase/analytics";
import { getDatabase, ref, onValue } from "../@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRKLSfnXNqf4FI-5tdaeVmO1XMIpoma7g",
  authDomain: "undangan-anwar.firebaseapp.com",
  projectId: "undangan-anwar",
  storageBucket: "undangan-anwar.appspot.com",
  messagingSenderId: "281034793586",
  appId: "1:281034793586:web:b02a31df0dfc6c3182d8eb",
  measurementId: "G-9Y06GB3XDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


const starCountRef = ref(db, 'comment/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});