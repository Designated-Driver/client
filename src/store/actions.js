import { firebase } from './utils/firebase'

export default {
  authenticateUser: function ({commit, dispatch, state}, payload) {
    return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
      console.log('user has been created')
      commit('SET_AUTH_STATE')
    }).catch(err => {
      console.log(err)
    })
  }
}
