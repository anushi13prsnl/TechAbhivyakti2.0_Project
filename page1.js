import { firebaseConfig } from "./config.js";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const signoutBtn = document.querySelector('#signoutbtn');
signoutBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to sign out?')) {
    auth.signOut()
      .then(() => {
        console.log('User signed out successfully');
        location.href = "index.html";
      })
      .catch((error) => {
        alert('Error signing out: ' + error.message);
      });
  }
});

