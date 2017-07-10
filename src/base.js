import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCSkicq-Ee9jZWFQmgfb5J3tlMi7_TjdR0",
    authDomain: "noteherder-204ec.firebaseapp.com",
    databaseURL: "https://noteherder-204ec.firebaseio.com",
    projectId: "noteherder-204ec",
    storageBucket: "",
    messagingSenderId: "1080407737200"
})

const db = database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = app.auth()

export default Rebase.createClass(db)
