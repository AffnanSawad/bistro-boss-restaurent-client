// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqylKZNFQyIIHOZBKH7Zvlrb3wxne4CvQ",
  authDomain: "bistro-boss-restaurent-2e929.firebaseapp.com",
  projectId: "bistro-boss-restaurent-2e929",
  storageBucket: "bistro-boss-restaurent-2e929.appspot.com",
  messagingSenderId: "280398176235",
  appId: "1:280398176235:web:58047ac98d5f61fb5283ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;