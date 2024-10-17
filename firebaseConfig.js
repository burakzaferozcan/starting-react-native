// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-lyQnNx6wYmr--xg2SamA5tkOuFqycw",
  authDomain: "test-app-addad.firebaseapp.com",
  projectId: "test-app-addad",
  storageBucket: "test-app-addad.appspot.com",
  messagingSenderId: "1040204759488",
  appId: "1:1040204759488:web:d7c000d79df8bb60bac825",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);

export default app;
