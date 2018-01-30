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
    <sidebar @closeSidebar="closeSidebar()" v-if="showSidebar"/>
  </div>
</template>

<script>
  import Sidebar from './Frame/Sidebar'
  export default {
    data () {
      return {
        showSidebar: true
      }
    },
    components: { Sidebar },
    methods: {
      closeSidebar () {
        console.log('closing sidebar')
        this.showSidebar = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.frame {
  position: absolute;
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