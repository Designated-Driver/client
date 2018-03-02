export default {
  SET_AUTH_STATE: function (state, authState) {
    state.authState = authState
  },
  MUTATE_SHOW_ABOUT_PAGE: function (state, val) {
    state.showAboutPage = val
  }
}
