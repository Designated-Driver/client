<template>
  <div class="rider-toolbar" 
  :class="{'user-height': toolbar.showUser,
            'request-height': toolbar.showRequestRide, 
            'verify-height': toolbar.showVerifyEoR, 
            'settings-height': toolbar.showSettings,
            'toolbar-height': toolbar.showToolbar}">
    <rider-buttons 
      @clickUser="clickUser"
      @clickRequestRide="clickRequestRide"
      @clickVerifyEoR="clickVerifyEoR"
      @clickSettings="clickSettings"
      v-if="toolbar.showToolbar"
    />
    <rider-user 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showUser" />
    <rider-request 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showRequestRide" />
    <rider-verify 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showRequestRide" />
    <rider-settings 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showSettings" />
  </div>
</template>

<script>
  import RiderButtons from './RiderButtons'
  import RiderUser from './RiderUser/RiderUser'
  import RiderRequest from './RiderRequest/RiderRequest'
  import RiderSettings from './RiderSettings/RiderSettings'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'RiderToolbar',
    components: { RiderButtons, RiderUser, RiderRequest, RiderSettings },
    computed: {
      ...mapGetters([
        'getClearRoute'
      ])
    },
    data () {
      return {
        toolbar: {
          showUser: false,
          showRequestRide: false,
          showSettings: false,
          showToolbar: true
        }
      }
    },
    methods: {
      ...mapActions([
        'clearRoute'
      ]),
      clickUser: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showUser = true
      },
      clickRequestRide: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showRequestRide = true
      },
      clickVerifyEoR: function () {
        this.clearRoute(true)
      },
      clickSettings: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showSettings = true
      },
      closeToolbar: function () {
        this.toolbar.showUser = false
        this.toolbar.showRequestRide = false
        this.toolbar.showSettings = false
        this.toolbar.showToolbar = true
      }
    }
  }
</script>

<style lang="scss" scoped>
.user-height {
  height: 350px;
  max-height: 45vh;
}

.request-height {
  height: 275px;
}

.verify-height {
  height: 100vh;
}

.settings-height {
  height: 100vh;
}

.toolbar-height {
  height: 10vh;
}

.rider-toolbar {
  transition: all ease-in-out .2s;
  width: 100%;
  color: white;
}
</style>