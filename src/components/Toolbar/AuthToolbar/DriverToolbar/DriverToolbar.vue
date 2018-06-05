<template>
  <div class="driver-toolbar" 
<<<<<<< HEAD
  :class="{'profile-height': toolbar.showProfile,
            'settings-height': toolbar.showSettings,
            'toolbar-height': toolbar.showToolbar}">
    <driver-buttons 
      @clickUser="clickProfile"
      @clickSettings="clickSettings"
      v-if="toolbar.showToolbar"
    />
    <driver-profile 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showProfile" />
    <driver-settings 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showSettings" />
=======
  :class="{'user-height': toolbar.showUser, 
            'settings-height': toolbar.showSettings,
            'messaging-height': toolbar.showMessaging,
            'accept-height': toolbar.showAccept,
            'toolbar-height': toolbar.showToolbar}">
    <driver-buttons 
      @clickUser="clickUser"
      @clickSettings="clickSettings"
      @clickMessaging="clickMessaging"
      @clickAccept="clickAccept"
      v-if="toolbar.showToolbar"
    />
    <driver-accept
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showAccept" />
    <driver-user 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showUser" />
    <driver-settings 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showSettings" />
    <driver-messaging
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showMessaging" />
>>>>>>> Test-Merge
  </div>
</template>

<script>
  import DriverButtons from './DriverButtons'
<<<<<<< HEAD
  import DriverProfile from './DriverProfile/DriverProfile'
  import DriverSetting from './DriverSetting/DriverSetting'
  export default {
    name: 'DriverToolbar',
    components: { DriverButtons, DriverProfile, DriverSetting },
    data () {
      return {
        toolbar: {
          showProfile: false,
          showSettings: false,
=======
  import DriverUser from './DriverProfile/DriverProfile'
  import DriverMessaging from './DriverMessaging/DriverMessaging'
  import DriverAccept from './DriverAccept/DriverAccept'
  import DriverSettings from './DriverSettings/DriverSettings'
  import { mapActions } from 'vuex'

  export default {
    name: 'DriverToolbar',
    components: { DriverButtons, DriverUser, DriverSettings, DriverMessaging, DriverAccept },
    data () {
      return {
        toolbar: {
          showUser: false,
          showSettings: false,
          showMessaging: false,
          showAccept: false,
>>>>>>> Test-Merge
          showToolbar: true
        }
      }
    },
    methods: {
<<<<<<< HEAD
      clickProfile: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showProfile = true
=======
      ...mapActions([
        'updateRiderName'
      ]),
      clickUser: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showUser = true
>>>>>>> Test-Merge
      },
      clickSettings: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showSettings = true
      },
<<<<<<< HEAD
      closeToolbar: function () {
        this.toolbar.showProfile = false
        this.toolbar.showSettings = false
=======
      clickMessaging: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showMessaging = true
      },
      clickAccept: function () {
        this.updateRiderName('Ice Poseidon')
        this.toolbar.showToolbar = false
        this.toolbar.showAccept = true
      },
      closeToolbar: function () {
        this.toolbar.showUser = false
        this.toolbar.showSettings = false
        this.toolbar.showMessaging = false
        this.toolbar.showAccept = false
>>>>>>> Test-Merge
        this.toolbar.showToolbar = true
      }
    }
  }
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.profile-height {
  height: 350px;
  max-height: 45vh;
}

.settings-height {
  height: 100vh;
}

.toolbar-height {
  height: 10vh;
}

=======
.user-height {
  height: 350px;
  max-height: 45vh;
}
.accept-height {
  height: 20vh;
}
.settings-height {
  height: 100vh;
}
.messaging-height {
  height: 20vh;
}
.toolbar-height {
  height: 10vh;
}
>>>>>>> Test-Merge
.driver-toolbar {
  transition: all ease-in-out .2s;
  width: 100%;
  color: white;
}
</style>