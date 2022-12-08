// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvUpYcPDW93uwwBItg6370qiacT8eQHP8",
    authDomain: "erfolgsbaer.firebaseapp.com",
    projectId: "erfolgsbaer",
    storageBucket: "erfolgsbaer.appspot.com",
    messagingSenderId: "131101304487",
    appId: "1:131101304487:web:9997b90ecfca9146875d82",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };