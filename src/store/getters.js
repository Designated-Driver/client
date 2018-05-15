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
  getDisplayAccountType: function (state) {
    return state.auth.accountType
  },
  getDisplayPhoneNumber: function (state) {
    return state.auth.phoneNumber
  },
  getDisplayCarMake: function (state) {
    return state.auth.carMake
  },
  getDisplayCarModel: function (state) {
    return state.auth.carModel
  },
  getDisplayMessageToken: function (state) {
    return state.auth.messageToken
  },
  getDisplayLongitude: function (state) {
    return state.auth.currentLon
  },
  getDisplayLatitude: function (state) {
    return state.auth.currentLat
  },
  getDisplayCarYear: function (state) {
    return state.auth.carYear
  },
  getDisplayID: function (state) {
    return state.auth.ID
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
