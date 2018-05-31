import { firebase, messaging } from './utils/firebase'

export default {
  authenticateUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).set({
          'fullName': payload.fullName,
          'email': payload.email,
          'accountType': payload.accountType,
          'carMake': payload.carMake,
          'carModel': payload.carModel,
          'carYear': payload.carYear,
          'ID': payload.ID,
          'partner': payload.partner
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
        commit('SET_DISPLAY_ID', payload.ID)
        commit('SET_DISPLAY_PARTNER', payload.partner)
      }).catch(err => {
        console.log(err)
      })
  },
  loginUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      // Should move the user from offline to riders or drivers currentlyIdle -> set the current account type in state
      firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).once('value').then(snapshot => {
        commit('SET_DISPLAY_ACCOUNT', snapshot.val().accountType)
        commit('SET_DISPLAY_CAR_MAKE', snapshot.val().carMake)
        commit('SET_DISPLAY_CAR_MODEL', snapshot.val().carModel)
        commit('SET_DISPLAY_CAR_YEAR', snapshot.val().carYear)
        commit('SET_DISPLAY_ID', snapshot.val().ID)
      })
      commit('SET_DISPLAY_NAME', firebase.auth().currentUser.displayName)
      commit('SET_DISPLAY_EMAIL', firebase.auth().currentUser.email)
      commit('SET_AUTH_STATE', true)
      messaging.getToken().then(token => {
        console.log(`The token is ${token}`)
      })
    }).catch(err => {
      console.log(err)
    })
  },
  findPartnerID: function ({commit, dispatch, state}, payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      // var inputPartner
      // Should move the user from offline to riders or drivers currentlyIdle -> set the current account type in state
      firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).once('value').then(snapshot => {
        // inputPartner = snapshot.val().partner

        firebase.database().ref(`/users/online/currentlyIdle/`).orderByKey().once(`value`).then(function (snapshot) {
          snapshot.forEach(function (childSnapshot) {
            var getPartnerID = childSnapshot.child(`ID`).val()
            console.log('The partners ID is: ' + getPartnerID)
            console.log('The new partners ID is: ' + payload.partner)
            if (getPartnerID === payload.partner) {
              firebase.database().ref(`/users/online/currentlyIdle/${firebase.auth().currentUser.uid}`).update({
                'partner': payload.partner
              })
              commit('SET_DISPLAY_PARTNER', payload.partner)
              console.log('true')
            } else console.log('false')
          })
        })
      })
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
