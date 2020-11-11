import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCpr527SnHHfscuypnPxX2JcZlhxw4CvlY",
    authDomain: "tdm5relator1.firebaseapp.com",
    databaseURL: "https://tdm5relator1.firebaseio.com",
    projectId: "tdm5relator1",
    storageBucket: "tdm5relator1.appspot.com",
    messagingSenderId: "287989974512",
    appId: "1:287989974512:web:f1975f86b36bc634984935"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .database()