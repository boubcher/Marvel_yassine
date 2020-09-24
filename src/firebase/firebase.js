import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


const config = {
    apiKey: "AIzaSyAroMigEWsMTws8KVxofjInc6HmOQ6_408",
    authDomain: "marvel-322c7.firebaseapp.com",
    databaseURL: "https://marvel-322c7.firebaseio.com",
    projectId: "marvel-322c7",
    storageBucket: "marvel-322c7.appspot.com",
    messagingSenderId: "311898338657",
    appId: "1:311898338657:web:546ecb46cf67cd58fd8120"
  };


class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth=app.auth();
        this.db=app.firestore();
    }
    //inscription 
    signupUser = (email,password) =>
    this.auth.createUserWithEmailAndPassword(email,password);
    //Connexion
    loginUser = (email,password) =>
    this.auth.signInWithEmailAndPassword(email,password);
    //Deconnexion
    signoutUser = () =>
    this.auth.signOut();
    //Récupérer le mot de passe
    PasswordReset = email => this.auth.sendPasswordResetEmail(email);

    user =uid=> this.db.doc(`users/${uid}`);

    

}

export default Firebase;
