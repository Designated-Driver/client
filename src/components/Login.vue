<template>
<center>
  <div class="login">
    <div class="box">
    Username:
    <input type="text" name="user">
    </div>
    <div class="box">
    Password: 
    <input type="text" name="password">
    
    </div>
    <router-link to ="/submit">
      <span><input type="submit" value="Submit"></span>
    </router-link>
  </div>
</center>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>
.login {
  width: 400px;
  border: 1px solid green;
}
.box{
  width:100%;
  display:flex;
}
input{
  width:250px;

}


</style>