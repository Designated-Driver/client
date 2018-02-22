export default {
  SET_AUTH_STATE: function (state) {
    state.authState = true
  },
  MUTATE_SHOW_ABOUT_PAGE: function (state, val) {
    state.showAboutPage = val
  }
}
