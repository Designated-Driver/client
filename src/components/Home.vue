<template>
<div>
  <div class="home">
    <main-map/>
    <toolbar/>
  </div>
  <about v-if="getShowAboutPage"/>
  </div>
</template>

<script>
import Toolbar from './Toolbar/Toolbar'
import MainMap from './Map/MainMap'
import About from './About'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  components: { Toolbar, MainMap, About },
  computed: {
    ...mapGetters([
      'getShowAboutPage'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
