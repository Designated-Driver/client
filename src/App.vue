<template>
  <div id="app">
    <frame />
    <main>
       <!-- <img src="./assets/DD.png" alt="Vue.js PWA">-->
      <router-view></router-view>
    </main>
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
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}
</style>
