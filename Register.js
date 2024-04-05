// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDu43Bd3Dn-492piLtir1U2dkh0y8IrGvQ",
    authDomain: "artisanshub-f39c4.firebaseapp.com",
    projectId: "artisanshub-f39c4",
    storageBucket: "artisanshub-f39c4.appspot.com",
    messagingSenderId: "206003357954",
    appId: "1:206003357954:web:b0135fa49e1cc6726bda1b",
    measurementId: "G-KNGXYM5WQB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
