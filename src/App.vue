<template>
  <div id="app">
    <frame />
       <!-- <img src="./assets/DD.png" alt="Vue.js PWA">-->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Frame from './components/Frame'
export default {
  name: 'app',
  components: { Frame }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://meyerweb.com/eric/tools/css/reset/reset.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.router-view {
  height: calc(100% - 45px);
  width: 100vw;
  padding-top: 45px;  
  background: black;
  color: white;

}
</style>
