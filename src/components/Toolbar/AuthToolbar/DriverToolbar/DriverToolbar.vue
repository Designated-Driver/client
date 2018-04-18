<template>
  <div class="driver-toolbar" 
  :class="{'user-height': toolbar.showUser, 
            'settings-height': toolbar.showSettings,
            'toolbar-height': toolbar.showToolbar}">
    <rider-buttons 
      @clickUser="clickUser"
      @clickSettings="clickSettings"
      v-if="toolbar.showToolbar"
    />
    <rider-user 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showUser" />
    <rider-settings 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showSettings" />
  </div>
</template>

<script>
  import RiderButtons from './DriverButtons'
  import RiderUser from './DriverProfile/DriverProfile'
  import RiderSettings from './DriverSettings/DriverSettings'
  export default {
    name: 'DriverToolbar',
    components: { RiderButtons, RiderUser, RiderSettings },
    data () {
      return {
        toolbar: {
          showUser: false,
          showSettings: false,
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
      closeToolbar: function () {
        this.toolbar.showUser = false
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

.settings-height {
  height: 100vh;
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