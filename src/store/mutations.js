export default {
  SET_AUTH_STATE: function (state, authState) {
    state.authState = authState
  },
  SET_DISPLAY_NAME: function (state, displayName) {
    state.auth.displayName = displayName
  },
  SET_DISPLAY_PARTNER: function (state, displayPartner) {
    state.auth.displayPartner = displayPartner
  },
  SET_DISPLAY_EMAIL: function (state, email) {
    state.auth.email = email
  },
  SET_DISPLAY_ACCOUNT: function (state, accountType) {
    state.auth.accountType = accountType
  },
  SET_DISPLAY_PHONE_NUMBER: function (state, phoneNumber) {
    state.auth.phoneNumber = phoneNumber
  },
  SET_DISPLAY_CAR_MAKE: function (state, carMake) {
    state.auth.carMake = carMake
  },
  SET_DISPLAY_CAR_MODEL: function (state, carModel) {
    state.auth.carModel = carModel
  },
  SET_DISPLAY_CAR_YEAR: function (state, carYear) {
    state.auth.carYear = carYear
  },
  SET_DISPLAY_ID: function (state, ID) {
    state.auth.ID = ID
  },
  SET_DISCORD_LINK: function (state, chatLink) {
    state.auth.chatLink = chatLink
  },
  MUTATE_MESSAGE_TOKEN: function (state, messageToken) {
    state.auth.messageToken = messageToken
  },
  MUTATE_RIDER_NAME: function (state, riderName) {
    state.riderName = riderName
  },
  MUTATE_LONGITUDE: function (state, currentLon) {
    state.auth.currentLon = currentLon
  },
  MUTATE_LATITUDE: function (state, currentLat) {
    state.auth.currentLat = currentLat
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
