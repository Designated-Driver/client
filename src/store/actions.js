import { firebase, messaging } from './utils/firebase'

export default {
  authenticateUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        firebase.database().ref(`/users/online/${payload.accountType}s/currentlyIdle/${firebase.auth().currentUser.uid}`).set({
          'fullName': payload.fullName,
          'email': payload.email
        })
        firebase.auth().currentUser.updateProfile({
          displayName: payload.fullName,
          email: payload.email,
          carMake: payload.carMake,
          carModel: payload.carModel,
          carYear: payload.carYear
        }).then(() => {
          commit('SET_DISPLAY_NAME', firebase.auth().currentUser.displayName)
          commit('SET_DISPLAY_EMAIL', firebase.auth().currentUser.email)
          commit('SET_DISPLAY_CAR_MAKE', firebase.auth().currentUser.carMake)
          commit('SET_DISPLAY_CAR_MODEL', firebase.auth().currentUser.carModel)
          commit('SET_DISPLAY_CAR_YEAR', firebase.auth().currentUser.carYear)
        })
        commit('SET_AUTH_STATE', true) // Update this to provide more information to the state
      }).catch(err => {
        console.log(err)
      })
  },
  loginUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      // Should move the user from offline to riders or drivers currentlyIdle -> set the current account type in state
      commit('SET_DISPLAY_NAME', firebase.auth().currentUser.displayName)
      commit('SET_DISPLAY_EMAIL', firebase.auth().currentUser.email)
      commit('SET_DISPLAY_CAR_MAKE', firebase.auth().currentUser.carMake)
      commit('SET_DISPLAY_CAR_MODEL', firebase.auth().currentUser.carModel)
      commit('SET_DISPLAY_CAR_YEAR', firebase.auth().currentUser.carYear)
      commit('SET_AUTH_STATE', true)
      messaging.getToken().then(token => {
        console.log(`The token is ${token}`)
      })
    }).catch(err => {
      console.log(err)
    })
  },
  logoutUser: function ({commit, dispatch, state}) {
    return firebase.auth().signOut().then(response => {
      commit('SET_AUTH_STATE', false)
    }).catch(err => {
      console.log(err)
    })
  },
  showAboutPage: function ({commit, dispatch, state}, val) {
    commit('MUTATE_SHOW_ABOUT_PAGE', val)
  },
  toggleMessaging () {
    messaging.requestPermission()
      .then(() => {
        messaging.getToken().then(token => {
          console.log(`The token is ${token}`)
        })
      })
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
