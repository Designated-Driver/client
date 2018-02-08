<template>
  <div class="home">
    <main-map/>
    <toolbar/>
  </div>
</template>

<script>
import Toolbar from './Toolbar/Toolbar'
import MainMap from './Map/MainMap'
export default {
  name: 'home',
  components: { Toolbar, MainMap }
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
