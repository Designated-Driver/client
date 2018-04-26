export default {
  getAuthState: function (state) {
    return state.authState
  },
  getDisplayName: function (state) {
    return state.auth.displayName
  },
  getDisplayEmail: function (state) {
    console.log(state.auth.email)
    return state.auth.email
  },
  getDisplayPhoneNumber: function (state) {
    return state.auth.phoneNumber
  },
  getDisplayIDNumber: function (state) {
    console.log(state.auth.idnumber)
    console.log('huucdsfd')
    return state.auth.idnumber
  },
  getShowAboutPage: function (state) {
    return state.showAboutPage
  },
  getStartLocation: function (state) {
    return state.startLocation
  },
  getEndLocation: function (state) {
    return state.endLocation
  },
  getTripCost: function (state) {
    return state.tripCost
  },
  getGenerateRoute: function (state) {
    return state.generateRoute
  },
  getCurrentlyOnTrip: function (state) {
    return state.currentlyOnTrip
  }
}
