import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBy9ofBmLxTOy1ktF_FaprTThn6RxV64bE",
  authDomain: "kano-slack.firebaseapp.com",
  databaseURL: "https://kano-slack.firebaseio.com",
  projectId: "kano-slack",
  storageBucket: "kano-slack.appspot.com",
  messagingSenderId: "785660187197",
  appId: "1:785660187197:web:2ea3d8d7944c8ae3dc1054",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
