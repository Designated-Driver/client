<template>
  <div class="auth-toolbar">
    <rider-toolbar v-if="showRiderToolbar" />
    <driver-toolbar v-else/>
  </div>
</template>

<script>
  import RiderToolbar from './RiderToolbar/RiderToolbar'
  import DriverToolbar from './DriverToolbar/DriverToolbar'
  export default {
    name: 'AuthToolbar',
    components: { RiderToolbar, DriverToolbar },
    data () {
      return {
        showDriverToolbar: false,
        showRiderToolbar: true
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
