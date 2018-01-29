<template>
  <div class="login">
    Log in
    <div class="box">
      Username:
      <input type="text" name="user">
    </div>
    <div class="box">
      Password: 
      <input type="password" name="password">
    </div>
    <router-link to ="/submit">
      <span><input type="submit" value="Submit"></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100%; 


  .box{
    width: 80%;
    padding: 0 10%;
    display:flex;
    align-items:center;
    
    input{
      max-width: 250px;
    }
  } 
}
</style>