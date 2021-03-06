export default {
  getAuthState: function (state) {
    return state.authState
  },
  getDisplayName: function (state) {
    return state.auth.displayName
  },
  getDisplayPartner: function (state) {
    return state.auth.displayPartner
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
  getDisplayLink: function (state) {
    return state.auth.chatLink
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
  getRiderName: function (state) {
    return state.riderName
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
  getClearedRoute: function (state) {
    return state.clearedRoute
  },
  getCurrentlyOnTrip: function (state) {
    return state.currentlyOnTrip
  }
}
