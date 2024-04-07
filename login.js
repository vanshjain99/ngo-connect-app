
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAI7P0tWAsDuTqFl5WTThrb5NdW_dv7W10",
authDomain: "database-3cc82.firebaseapp.com",
projectId: "database-3cc82",
storageBucket: "database-3cc82.appspot.com",
messagingSenderId: "235488205901",
appId: "1:235488205901:web:26dc483d83c3807b2cd004"
};

const formEl = document.getElementById("login-form");
const userEmail = document.getElementById("email");
const userPass = document.getElementById("password");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();


formEl.addEventListener("submit", function(event){
    event.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail.value, userPass.value)
  .then((userCredential) => {
    console.log(userCredential)
    console.log(userEmail.value);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});
