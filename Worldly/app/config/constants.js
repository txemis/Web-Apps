import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAARSp9-S0Y0BwpZEDeWnFpBy6KgqA7Aco",
  authDomain: "worldly-eb27d.firebaseapp.com",
  databaseURL: "https://worldly-eb27d.firebaseio.com",
  storageBucket: "worldly-eb27d.appspot.com",
  messagingSenderId: "67129826229"
}
firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
