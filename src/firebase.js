import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAHyBGUBDb9R50OIXeyFblqRJnRuS_mS6w",
  authDomain: "findingkirby-ca5a9.firebaseapp.com",
  projectId: "findingkirby-ca5a9",
  storageBucket: "gs://findingkirby-ca5a9.appspot.com/",
  messagingSenderId: "467678833622",
  appId: "1:467678833622:web:eeba44d082c4d2be921277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db}