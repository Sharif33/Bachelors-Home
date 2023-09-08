import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_API_KEY || "AIzaSyDtaCyootWhyzOIE5LqwWHO3suXQFu8g0E",
  authDomain:
    import.meta.env.VITE_AUTH_DOMAIN || "bachelors-home-846ea.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID || "bachelors-home-846ea",
  storageBucket:
    import.meta.env.VITE_STORAGE_BUCKET || "bachelors-home-846ea.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID || 353000853434,
  appId:
    import.meta.env.VITE_APP_ID || "1:353000853434:web:8b63592a96eaead67bd783",
};

export const app = initializeApp(firebaseConfig);
