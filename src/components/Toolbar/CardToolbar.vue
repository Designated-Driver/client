<template>
  <div class="toolbar">
    <unauth-toolbar v-if="!getAuthState"/>
    <auth-toolbar v-else/>
  </div>
</template>

<script>
  import AuthToolbar from './AuthToolbar/AuthToolbar'
  import UnauthToolbar from './UnauthToolbar/UnauthToolbar'
  import RingLoader from 'vue-spinner/src/RingLoader.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Toolbar',
    components: { AuthToolbar, UnauthToolbar, RingLoader },
    computed: {
      ...mapGetters([
        'getAuthState'
      ])
    }
  }
</script>

<style lang="scss">
.toolbar {
  position: absolute;
  bottom: -600px;
  background: #2C2F33;
  width: 100%;
  z-index: 1;
}

.close-toolbar {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>