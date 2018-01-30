<template>
  <div class="login">
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
  .box{
    width: 80%;
    padding: 0 10%;
    display: flex;
    align-items: center;
    
    input{
      max-width: 250px;
    }
  } 
}
</style>