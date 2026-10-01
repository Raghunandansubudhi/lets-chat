import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ── Startup validation ────────────────────────────────────────────────────────
const requiredEnvVars = {
  REACT_APP_FIREBASE_API_KEY:            process.env.REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID:         process.env.REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET:     process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID:             process.env.REACT_APP_FIREBASE_APP_ID,
};

const missing = Object.entries(requiredEnvVars)
  .filter(([, v]) => !v || v.startsWith("YOUR_"))
  .map(([k]) => k);

if (missing.length > 0) {
  console.error(
    "🔴 Firebase config error — missing or placeholder values in frontend/.env:\n" +
    missing.map((k) => `   • ${k}`).join("\n") +
    "\n\nUpdate frontend/.env with real values from Firebase Console, then restart npm start."
  );
}
// ─────────────────────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

