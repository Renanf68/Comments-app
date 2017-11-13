import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC2UGi-iVjn8imPPbyl9N6PirHN15xILng",
    authDomain: "comments-app-cf723.firebaseapp.com",
    databaseURL: "https://comments-app-cf723.firebaseio.com",
    projectId: "comments-app-cf723",
    storageBucket: "",
    messagingSenderId: "231281558398"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base