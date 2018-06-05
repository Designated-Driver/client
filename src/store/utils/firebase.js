const firebase = require('firebase')
var config = {
  apiKey: 'AIzaSyCNtTlfQ0rbHqcrKCCuOJL9l8AuzPXx_58',
  authDomain: 'designated-driv.firebaseapp.com',
  databaseURL: 'https://designated-driv.firebaseio.com',
  projectId: 'designated-driv',
  storageBucket: 'designated-driv.appspot.com',
  messagingSenderId: '427262799693'
}

firebase.initializeApp(config)
const messaging = firebase.messaging()

navigator.serviceWorker.register('./static/firebase-messaging-sw.js')
  .then((registration) => {
    console.log(`using the sw`)
    messaging.useServiceWorker(registration)
  }).catch(err => {
    console.log(err)
  })

messaging.onMessage(payload => {
  console.log('created message')
  console.log(payload)
})

export {
  firebase,
  messaging
}
