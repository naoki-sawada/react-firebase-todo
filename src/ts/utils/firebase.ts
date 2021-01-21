import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(CONFIG.firebase);

const auth: firebase.auth.Auth = firebase.auth();
const db: firebase.database.Database = firebase.database();

export { auth, db };