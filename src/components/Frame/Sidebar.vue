<template>
  <transition name="sidebar">
    <v-touch v-on:panleft="closeSidebar()" class="sidebar">
      <div class="sidebar-nav">
        <div class="sidebar-close" @click="closeSidebar()">
          <i class="fa fa-times fa-lg" aria-hidden="true"></i>        
        </div>
        <div class="sidebar-content" @click="closeSidebar()">
          <router-link to ="/">
            <span>Home</span>
          </router-link> 
          <router-link to ="/about">
            <span>About</span>
          </router-link>  
          <router-link to="/login">
            <span>Login</span>
          </router-link>
          <router-link to="/signup">
            <span>Signup</span>
          </router-link>
        </div>
      </div>
      <div class="sidebar-empty" @click="closeSidebar()"></div>
    </v-touch>
  </transition>
</template>

<script>
  export default {
    name: 'Sidebar',
    methods: {
      closeSidebar () {
        this.$emit('closeSidebar')
      }
    }
  }
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  display: flex;

  .sidebar-nav {
    width: 66%;
    height: 100%;
    background-color: #35495E;
    display: flex;
    flex-direction: column;

    .sidebar-close {
      height: 45px;

      >i {
        width: 45px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
    }

    .sidebar-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      a {
        height: 40px;
        padding: 0 10%;
        width: 80%;
        display: flex;
        align-items: center;
        text-decoration: none;

        span {
          color: white;
        }
      }
    }
  }

  .sidebar-empty {
    width: 34%;
    filter: brightness(0%);
  }
}

.sidebar-enter-active, .sidebar-leave-active {
  transition: all ease-in-out .2s;
}

.sidebar-enter, .sidebar-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
}
</style>