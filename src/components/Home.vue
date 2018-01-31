<template>
  <div class="home">
    <div class="main">
      This is the main map.
    </div>
    <div class="toolbar" :style="{'height': (showLogIn || showSignIn) ? '50%' : '10%' }">
      <template v-if="(!showLogIn && !showSignIn)">
        <span @click="clickLogin">Login</span>
        <span @click="clickSignUp">Signup</span>
      </template>
      <template v-else>
        <div class="login" v-if="showLogIn">
          This is the login
        </div>
        <div class="signup" v-else-if="showSignIn">
          This is the signup
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      showSignIn: false,
      showLogIn: false
    }
  },
  methods: {
    clickLogin () {
      this.showLogIn = true
    },
    clickSignUp () {
      this.showSignIn = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  position: relative;
  height: 100%;
  width: 100%;

  .main {
    height: 90vh;
    background: gray;
    color: white;
    z-index: 0;
  }

  .toolbar {
    position: absolute;
    bottom: 0px;
    border-top: 2px solid black;
    background: white;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    transition: all ease-in-out .2s;

    span {
      height: 46px;
      width: 160px; 
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
    }
  }
}
</style>
