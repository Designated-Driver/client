<template>
  <div class="driver-toolbar" 
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
  </div>
</template>

<script>
  import DriverButtons from './DriverButtons'
  import DriverUser from './DriverProfile/DriverProfile'
  import DriverMessaging from './DriverMessaging/DriverMessaging'
  import DriverAccept from './DriverAccept/DriverAccept'
  import DriverSettings from './DriverSettings/DriverSettings'
  
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
          showToolbar: true
        }
      }
    },
    methods: {
      clickUser: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showUser = true
      },
      clickSettings: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showSettings = true
      },
      clickMessaging: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showMessaging = true
      },
      clickAccept: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showAccept = true
      },
      closeToolbar: function () {
        this.toolbar.showUser = false
        this.toolbar.showSettings = false
        this.toolbar.showMessaging = false
        this.toolbar.showAccept = false
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

.driver-toolbar {
  transition: all ease-in-out .2s;
  width: 100%;
  color: white;
}
</style>