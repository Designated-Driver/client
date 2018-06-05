import { firebase, messaging } from './utils/firebase'

export default {
  authenticateUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        messaging.requestPermission()
          .then(() => {
            messaging.getToken()
              .then(token => {
                firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).update({
                  'messageToken': token
                })
                commit('MUTATE_MESSAGE_TOKEN', token)
              })
          })

        navigator.geolocation.watchPosition(position => {
          firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).update({
            'currentLat': position.coords.latitude,
            'currentLon': position.coords.longitude
          })
          commit('MUTATE_LATITUDE', position.coords.latitude)
          commit('MUTATE_LONGITUDE', position.coords.longitude)
        })
        firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).update({
          'fullName': payload.fullName,
          'email': payload.email,
          'accountType': payload.accountType,
          'carMake': payload.carMake,
          'carModel': payload.carModel,
          'carYear': payload.carYear
        })
        firebase.auth().currentUser.updateProfile({
          displayName: payload.fullName,
          email: payload.email
        })
        commit('SET_AUTH_STATE', true) // Update this to provide more information to the state
        commit('SET_DISPLAY_ACCOUNT', payload.accountType)
        commit('SET_DISPLAY_CAR_MAKE', payload.carMake)
        commit('SET_DISPLAY_CAR_MODEL', payload.carModel)
        commit('SET_DISPLAY_CAR_YEAR', payload.carYear)
        commit('SET_DISPLAY_NAME', payload.fullName)
        commit('SET_DISPLAY_EMAIL', payload.email)
      }).catch(err => {
        console.log(err)
      })
  },
  loginUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      navigator.geolocation.watchPosition(position => {
        firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).update({
          'currentLat': position.coords.latitude,
          'currentLon': position.coords.longitude
        })
        commit('MUTATE_LATITUDE', position.coords.latitude)
        commit('MUTATE_LONGITUDE', position.coords.longitude)
      })
      // Should move the user from offline to riders or drivers currentlyIdle -> set the current account type in state
      firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).once('value').then(snapshot => {
        commit('SET_DISPLAY_ACCOUNT', snapshot.val().accountType)
        commit('SET_DISPLAY_CAR_MAKE', snapshot.val().carMake)
        commit('SET_DISPLAY_CAR_MODEL', snapshot.val().carModel)
        commit('SET_DISPLAY_CAR_YEAR', snapshot.val().carYear)
        commit('MUTATE_MESSAGE_TOKEN', snapshot.val().messageToken)
      })
      commit('SET_DISPLAY_NAME', firebase.auth().currentUser.displayName)
      commit('SET_DISPLAY_EMAIL', firebase.auth().currentUser.email)
      commit('SET_AUTH_STATE', true)
    }).catch(err => {
      console.log(err)
    })
  },
  logoutUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().signOut().then(response => {
      commit('SET_AUTH_STATE', false)
    }).catch(err => {
      console.log(err)
    })
  },
  createRequest: function ({commit, dispatch, state}, payload) {
    firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).once('value').then(snapshot => {
      firebase.database().ref('/rides').push({
        'riderLocation': payload.riderLocation,
        'dropOffLocation': payload.dropOffLocation,
        'messageToken': snapshot.val().messageToken,
        'name': snapshot.val().fullName
      })
      console.log('createRequest called')
    })
  },
  setRouteToRider: function ({commit, dispatch, state}) {
    firebase.database().ref('rides').once('value').then(snapshot => {
      var newArray = Object.values(snapshot.val())
      newArray.forEach(element => {
        commit('MUTATE_END_LOCATION', element.dropOffLocation)
      })
    })
  },
  setRouteToDestination: function ({commit, dispatch, state}) {
    firebase.database().ref('rides').once('value').then(snapshot => {
      var newArray = Object.values(snapshot.val())
      newArray.forEach(element => {
        commit('MUTATE_START_LOCATION', element.riderLocation)
        commit('MUTATE_END_LOCATION', element.dropOffLocation)
      })
      firebase.database().ref(`/rides`).remove()
    })
  },
  showAboutPage: function ({commit, dispatch, state}, val) {
    commit('MUTATE_SHOW_ABOUT_PAGE', val)
  },
  toggleMessaging () {
    messaging.requestPermission()
      .then(() => {
        messaging.getToken()
          .then(token => {
            console.log(token)
          })
      })
  },
  updateRiderName ({commit, dispatch, state}, val) {
    commit('MUTATE_RIDER_NAME', val)
  },
  updateDatabasePosition ({commit, dispatch, state}, lat, lon) {
    commit('MUTATE_LATITUDE', lat)
    commit('MUTATE_LONGITUDE', lon)
  },
  updateStartLocation ({commit, dispatch, state}, payload) {
    commit('MUTATE_START_LOCATION', payload)
  },
  updateEndLocation ({commit, dispatch, state}, payload) {
    commit('MUTATE_END_LOCATION', payload)
  },
  updateTripCost ({commit, dispatch, state}, val) {
    commit('MUTATE_TRIP_COST', val)
  },
  generateRoute ({commit, dispatch, state}, val) {
    commit('MUTATE_GENERATE_ROUTE', val)
  },
  updateCurrentlyOnTrip ({commit, dispatch, state}, val) {
    commit('MUTATE_CURRENLY_ON_TRIP', val)
  }
}
