<template>
  <div class="rider-toolbar" 
  :class="{'user-height': toolbar.showUser,
            'friends-height': toolbar.showFriends, 
            'request-height': toolbar.showRequestRide, 
            'settings-height': toolbar.showSettings,
            'toolbar-height': toolbar.showToolbar}">
    <rider-buttons 
      @clickUser="clickUser"
      @clickFriends="clickFriends"
      @clickRequestRide="clickRequestRide"
      @clickSettings="clickSettings"
      v-if="toolbar.showToolbar"
    />
    <rider-user 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showUser" />
    <rider-friends 
     @closeToolbar="closeToolbar"
     v-else-if="toolbar.showFriends" />
    <rider-request 
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
  import RiderFriends from './RiderFriends/RiderFriends'
  import RiderRequest from './RiderRequest/RiderRequest'
  import RiderSettings from './RiderSettings/RiderSettings'
  export default {
    name: 'RiderToolbar',
    components: { RiderButtons, RiderUser, RiderFriends, RiderRequest, RiderSettings },
    data () {
      return {
        toolbar: {
          showUser: false,
          showFriends: false,
          showRequestRide: false,
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
      clickFriends: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showFriends = true
      },
      clickRequestRide: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showRequestRide = true
      },
      clickSettings: function () {
        this.toolbar.showToolbar = false
        this.toolbar.showSettings = true
      },
      closeToolbar: function () {
        this.toolbar.showUser = false
        this.toolbar.showFriends = false
        this.toolbar.showRequestRide = false
        this.toolbar.showSettings = false
        this.toolbar.showToolbar = true
      }
    }
  }
</script>

<style lang="scss" scoped>
.user-height {
  height: 250px;
}

.friends-height {
  height: 300px;
}

.request-height {
  height: 275px;
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