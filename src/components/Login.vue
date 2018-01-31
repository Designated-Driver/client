<template>
  <div class="login">
  <h1>Log in</h1>
    <div class="box">
      Email:
      <input type="text" name="email">
    </div>
    <div class="box">
      Password: 
      <input type="password" name="password">
    </div>
    <div class="submit">
    <router-link to ="/submit">
      <span><input type="submit" value="Submit"></span>
    </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style lang="scss" scoped>

.login {
  h1 {
    text-align: center;
  }
  
  .box{
    width: 70%;
    padding: 5% 10%;
    display: flex;
    align-items: center;
  } 
  .submit{
    margin: auto;
    text-align: center;
    width: 20%;
    border: 1px solid green;
    background-color: green;
  }
}
</style>