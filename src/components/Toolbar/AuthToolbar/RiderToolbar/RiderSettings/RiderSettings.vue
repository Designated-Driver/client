<template>
  <div class="rider-settings">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    <div>
      <div @click="logout">LOGOUT HERE</div>
      <div @click="toggleMessages">Allow Messaging</div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'RiderSettings',
    methods: {
      ...mapActions([
        'logoutUser',
        'toggleMessaging'
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

<style lang="scss" scoped>
.rider-settings {
  height: 100%;
  width: 100%;
}
</style>