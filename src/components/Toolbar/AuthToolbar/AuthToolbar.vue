<template>
  <div class="auth-toolbar">
    <rider-toolbar v-if="getDisplayAccountType === 'rider'" />
    <driver-toolbar v-else-if="getDisplayAccountType === 'driver'"/>
  </div>
</template>

<script>
  import RiderToolbar from './RiderToolbar/RiderToolbar'
  import DriverToolbar from './DriverToolbar/DriverToolbar'
  import { mapGetters } from 'vuex'
  export default {
    name: 'AuthToolbar',
    components: { RiderToolbar, DriverToolbar },
<<<<<<< HEAD
    data () {
      return {
        showDriverToolbar: true,
        showRiderToolbar: false
      }
=======
    computed: {
      ...mapGetters([
        'getDisplayAccountType'
      ])
>>>>>>> Test-Merge
    }
  }
</script>

<style lang="scss" scoped>
</style>