var firebase = require('firebase')

var config = {
  apiKey: 'AIzaSyCNtTlfQ0rbHqcrKCCuOJL9l8AuzPXx_58',
  authDomain: 'designated-driv.firebaseapp.com',
  databaseURL: 'https://designated-driv.firebaseio.com',
  projectId: 'designated-driv',
  storageBucket: 'designated-driv.appspot.com',
  messagingSenderId: '427262799693'
}

firebase.initializeApp(config)

export {
  firebase
}
