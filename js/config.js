const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "motos-comparador-seo.firebaseapp.com",
    projectId: "motos-comparador-seo",
    storageBucket: "motos-comparador-seo.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
