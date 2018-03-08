export default {
  SET_AUTH_STATE: function (state, authState) {
    state.authState = authState
  },
  MUTATE_SHOW_ABOUT_PAGE: function (state, val) {
    state.showAboutPage = val
  },
  MUTATE_START_LOCATION: function (state, payload) {
    state.startLocation = payload
  },
  MUTATE_END_LOCATION: function (state, payload) {
    state.endLocation = payload
  },
  MUTATE_TRIP_COST: function (state, val) {
    state.tripCost = val
  },
  MUTATE_GENERATE_ROUTE: function (state, val) {
    state.generateRoute = val
  },
  MUTATE_CURRENLY_ON_TRIP: function (state, val) {
    state.currentlyOnTrip = val
  }
}
