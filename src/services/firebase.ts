import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAeD3fRHa7lZGmy9XdMZmKXdNuk0Xpael0",
	authDomain: "letmeask-4a1e6.firebaseapp.com",
	databaseURL: "https://letmeask-4a1e6-default-rtdb.firebaseio.com",
	projectId: "letmeask-4a1e6",
	storageBucket: "letmeask-4a1e6.appspot.com",
	messagingSenderId: "694493287121",
	appId: "1:694493287121:web:446fd6964f6c030e372bf0",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
