import firebase from 'firebase'
require("@firebase/firestore")


//Initialize Firebase
var firebase config = {
    apiKey: "AIzaSyDwBhPio_rtRYJrdRn9CMfvB4zKaCtTk2o",
    authDomin: "story-af552.firebaseapp.com",
    databaseURL: "https://story-af552.firebaseio.com",
    projectId: "story-af552",
    strongBucket: "story-af552.appspot.com",
    messagingSenderId: "868188287847",
    appId: "1:868188287847:web:3cbedaee4aafbc9ce835c2"
};


//Initialize Firebase
firbase.initializeApp(firebaseConfig);

export default firebase.firestore()