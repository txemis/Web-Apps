import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDzAiu_n3FjypOgQp-qrVnOekIEgPuDT5I",
  authDomain: "tylers-test-project-28d56.firebaseapp.com",
  databaseURL: "https://tylers-test-project-28d56.firebaseio.com",
  storageBucket: "tylers-test-project-28d56.appspot.com",
  messagingSenderId: "724274537947"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
