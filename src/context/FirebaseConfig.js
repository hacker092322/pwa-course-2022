import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyCOdDJNAIuHQ9o_fUkr_9n3FpZhxhoDp8Y",
  authDomain: "chat-app-fc09d.firebaseapp.com",
  projectId: "chat-app-fc09d",
  storageBucket: "chat-app-fc09d.appspot.com",
  messagingSenderId: "607278511916",
  appId: "1:607278511916:web:92d5028e4f72cc9f2e5e89",
  measurementId: "G-HF9BQV5EMZ",
  databaseURL: "https://chat-app-fc09d-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);

export { firebase };