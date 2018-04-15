<template>
  <div id="app">
    <router-view class="router-view"></router-view>
    <dropin
      wrapperClass="constrain"
      :authToken="authToken"
      :collectCardHolderName="true"
      :enableDataCollector="true"
      :enableGooglePay="true"
    >
    </dropin>
  </div>

  
</template>

<script>
import Dropin from '@/components/Card.vue'
export default {
  name: 'app',
  components: {
    Dropin
  },
  data () {
    return {
      authToken: 'sandbox_fdj8fdf4_rhnyxxfd2wmyp5bn'
    }
  }
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
  height: 100%;
  width: 100%;  
  background: #ececec;
  color: black;
}
</style>
