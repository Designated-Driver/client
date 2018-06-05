importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.10.1/firebase-messaging.js')
var config = {
  apiKey: 'AIzaSyCNtTlfQ0rbHqcrKCCuOJL9l8AuzPXx_58',
  authDomain: 'designated-driv.firebaseapp.com',
  databaseURL: 'https://designated-driv.firebaseio.com',
  projectId: 'designated-driv',
  storageBucket: 'designated-driv.appspot.com',
  messagingSenderId: '427262799693'
}
//allows messaging and using service worker
firebase.initializeApp(config)
const messaging = firebase.messaging()
