<template>
  <div class="home">
    <span>{{ msg }}</span>
    <div class="frame">
      <div class="frame-right"> 
        <router-link to="/login">
          <span>Login</span>
        </router-link>
        <router-link to="/signup">
          <span>Signup</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Designated Driver'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  background: black;
  height: 100%;
  width: 100vw;
}


a {
  color: white;
}
</style>
