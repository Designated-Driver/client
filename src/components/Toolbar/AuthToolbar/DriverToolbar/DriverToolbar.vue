<template>
  <div class="driver-toolbar" 
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
  </div>
</template>

<script>
  import DriverButtons from './DriverButtons'
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
          showToolbar: true
        }
      }
    },
    methods: {
      clickProfile: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showProfile = true
      },
      clickSettings: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showSettings = true
      },
      closeToolbar: function () {
        this.toolbar.showProfile = false
        this.toolbar.showSettings = false
        this.toolbar.showToolbar = true
      }
    }
  }
</script>

<style lang="scss" scoped>
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

.driver-toolbar {
  transition: all ease-in-out .2s;
  width: 100%;
  color: white;
}
</style>