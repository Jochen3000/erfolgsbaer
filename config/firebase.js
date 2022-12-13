// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';

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
const app = initializeApp(firebaseConfig);

// initialize auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export default app;
