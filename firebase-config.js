// حط بيانات مشروعك من Firebase هنا (Project settings > Your apps > Web app)
const firebaseConfig = {
  apiKey: "PUT_API_KEY",
  authDomain: "PUT_PROJECT.firebaseapp.com",
  projectId: "PUT_PROJECT_ID",
  appId: "PUT_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
