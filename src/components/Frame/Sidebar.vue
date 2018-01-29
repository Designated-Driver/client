<template>
<transition name="sidebar">
  <div class="sidebar">
    <div class="sidebar-nav"> 
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
</transition>
  
</template>

<script>
  export default {
    name: 'Sidebar'
  }
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  height: 100vh;
  width: 66vw;
  background-color: #35495E;
  z-index: 1;

  .sidebar-nav {
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 10%;

    a {
      height: 40px;
      display: flex;
      align-items: flex-end;
      text-decoration: none;

      span {
        color: white;
      }
    }
  }
}

.sidebar-enter-active, .sidebar-leave-active {
  transition: all ease-in-out .2s;
}

.sidebar-enter, .sidebar-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
}
</style>