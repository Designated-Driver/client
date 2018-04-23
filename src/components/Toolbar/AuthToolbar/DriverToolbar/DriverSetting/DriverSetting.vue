
<template>
<p>hello world </p>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'DriverSetting',
    computed: {
      ...mapGetters([
        'getDisplayName',
        'getDisplayEmail',
        'getDisplayPhoneNumber'
      ])
    },
    methods: {
      ...mapActions([
        'logoutUser',
        'toggleMessaging',
        'showAboutPage'
      ]),
      logout () {
        this.logoutUser()
      },
      toggleMessages () {
        this.toggleMessaging()
      }
    }
  }
</script>
