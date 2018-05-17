import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyCNtTlfQ0rbHqcrKCCuOJL9l8AuzPXx_58',
  authDomain: 'designated-driv.firebaseapp.com',
  databaseURL: 'https://designated-driv.firebaseio.com',
  projectId: 'designated-driv',
  storageBucket: 'designated-driv.appspot.com',
  messagingSenderId: '427262799693'
}

const messaging = firebase.initializeApp(config)
messaging.firestore().setting({ timestampsInSnapshots: true})

export default messaging.firestore()
