import { firebase } from './utils/firebase'

export default {
  authenticateUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        firebase.database().ref(`/users/online/${payload.accountType}s/currentlyIdle/${firebase.auth().currentUser.uid}`).set({
          'fullName': payload.fullName,
          'email': payload.email
        })
        commit('SET_AUTH_STATE', true) // Update this to provide more information to the state
      }).catch(err => {
        console.log(err)
      })
  },
  loginUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      // Should move the user from offline to riders or drivers currentlyIdle -> set the current account type in state
      commit('SET_AUTH_STATE', true)
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
  }
}
