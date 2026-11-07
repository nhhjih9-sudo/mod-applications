// حط بيانات مشروعك من Firebase هنا (Project settings > Your apps > Web app)
const firebaseConfig = {
  apiKey: "AIzaSyBuLxhL4E0haO8y_xFlt_I83lqCOLn7TdE",
  authDomain: "mod-applications-3a022.firebaseapp.com",
  projectId: "mod-applications-3a022",
  appId: "1:179474670664:web:e164f083d6b1073cd4247d"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
