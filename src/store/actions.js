import { firebase } from './utils/firebase'

export default {
  authenticateUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
      firebase.database().ref(`/users/${firebase.auth().currentUser.uid}`).set({
        'fullName': payload.fullName,
        'accountType': payload.accountType
      })
      commit('SET_AUTH_STATE')
    }).catch(err => {
      console.log(err)
    })
  },
  loginUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      console.log('you have signed in')
      commit('SET_AUTH_STATE')
    }).catch(err => {
      console.log(err)
    })
  },
  showAboutPage: function ({commit, dispatch, state}, val) {
    commit('MUTATE_SHOW_ABOUT_PAGE', val)
  }
}
