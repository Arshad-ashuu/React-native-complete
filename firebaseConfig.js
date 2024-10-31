// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE8FYdR5ldyBaryi1FkgHS7z7GoLyJ5K4",
  authDomain: "crud-firebase-75ab6.firebaseapp.com",
  projectId: "crud-firebase-75ab6",
  storageBucket: "crud-firebase-75ab6.firebasestorage.app",
  messagingSenderId: "129170812191",
  appId: "1:129170812191:web:3ecd8952a64dc27c15542a"
};

// Initialize Firebase App only if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth with AsyncStorage persistence for native platforms
export const auth = Platform.OS === "web"
  ? getAuth(app) // For web, use getAuth
  : initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
   
 export const db = getFirestore(app);


//-------------------basic template-------------------------------------

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyCE8FYdR5ldyBaryi1FkgHS7z7GoLyJ5K4",
//   authDomain: "crud-firebase-75ab6.firebaseapp.com",
//   projectId: "crud-firebase-75ab6",
//   storageBucket: "crud-firebase-75ab6.firebasestorage.app",
//   messagingSenderId: "129170812191",
//   appId: "1:129170812191:web:3ecd8952a64dc27c15542a"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Auth with AsyncStorage persistence
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

