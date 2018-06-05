<template>
<div>
  <div class="home" v-show="!getShowAboutPage">
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
