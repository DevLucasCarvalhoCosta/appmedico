// firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, browserLocalPersistence, Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Importe getFirestore
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

// Inicialize o Firestore
const firestore = getFirestore(firebaseApp);

let auth: Auth;

if (Platform.OS === 'web') {
  // Inicializar auth para web
  auth = getAuth(firebaseApp);
  auth.setPersistence(browserLocalPersistence);
} else {
  // Inicializar auth para React Native
  auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export { auth, firebaseApp, firestore }; // Exporte a instância do Firestore
export default firebaseApp;
