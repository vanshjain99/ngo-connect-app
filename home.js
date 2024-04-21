import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAI7P0tWAsDuTqFl5WTThrb5NdW_dv7W10",
    authDomain: "database-3cc82.firebaseapp.com",
    databaseURL: "https://database-3cc82-default-rtdb.firebaseio.com",
    projectId: "database-3cc82",
    storageBucket: "database-3cc82.appspot.com",
    messagingSenderId: "235488205901",
    appId: "1:235488205901:web:26dc483d83c3807b2cd004"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Check if the user is logged in
auth.onAuthStateChanged(function (user) {
    const loginButton = document.getElementById('loginButton');
    const profileImage = document.getElementById('profile');
    if (user) {
        // User is logged in
        if (loginButton) {
            loginButton.style.display = 'none';
        }
        if (profileImage) {
            profileImage.style.display = 'inline-block'; // Show profile image
        }
    } else {
        // User is not logged in
        if (loginButton) {
            loginButton.style.display = 'block';
        }
        if (profileImage) {
            profileImage.style.display = 'none'; // Hide profile image
        }
    }
});
const logoutBtn = document.getElementById('signOutButton'); // Select by ID
logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
    loginButton.style.display = 'flex';
    logoutBtn.style.display = 'none'; // Use logoutBtn instead of signOutButton
    console.log('User signed out!');
});
