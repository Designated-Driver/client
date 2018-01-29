<template>
  <div class="frame">
    <div class="frame-right"> 
      <router-link to ="/">
        <span>Home</span>
      </router-link>  
      <router-link to="/login">
        <span>Login</span>
      </router-link>
      <router-link to="/signup">
        <span>Signup</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
.frame {
  margin: 0;
  height: 45px;
  padding: 0 50px;
  background-color: #35495E;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}


.frame-right {
  height: 100%;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.frame-right a {
  text-decoration: none;
}

.frame-right a span {
  color: white;
}
</style>