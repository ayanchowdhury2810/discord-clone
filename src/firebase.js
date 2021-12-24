import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC-KE3jRljw3z4tFiklRlrJFrelTJgxiDg",
    authDomain: "discord-clone-1ac62.firebaseapp.com",
    projectId: "discord-clone-1ac62",
    storageBucket: "discord-clone-1ac62.appspot.com",
    messagingSenderId: "822442722524",
    appId: "1:822442722524:web:e34da5c4063dd59dd76019",
    measurementId: "G-3S1FN3Q0R6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;