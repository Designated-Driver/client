<template>
  <div>
    <div class="frame">
      <div class="frame-left" @click="showSidebar = !showSidebar">
        <i class="fa fa-bars fa-lg" aria-hidden="true" v-if="!showSidebar"></i>
        <i class="fa fa-times fa-lg" aria-hidden="true" v-else></i>        
      </div>
      <div class="frame-right">
        DesignatedDriver
      </div>
    </div>
    <transition name="sidebar">
    
    </transition>
    <sidebar v-if="showSidebar"/>
  </div>
</template>

<script>
  import Sidebar from './Frame/Sidebar'
  export default {
    data () {
      return {
        showSidebar: false
      }
    },
    components: { Sidebar }
  }
</script>

<style lang="scss" scoped>
.frame {
  height: 45px;
  width: 100%;
  background-color: #35495E;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  z-index: 0;

  .frame-left {
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frame-right {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
}
</style>