export default {
  getAuthState: function (state) {
    return state.authState
  },
  getDisplayName: function (state) {
    return state.auth.displayName
  },
  getDisplayEmail: function (state) {
    return state.auth.email
  },
  getDisplayPhoneNumber: function (state) {
    return state.auth.phoneNumber
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
