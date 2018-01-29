<template>
<center>
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
  height: 150px; 
  border: 1px solid green;
  padding-top: 50px;
  padding-left: 15px;
  
}
.box{
  width:100%;
  display:flex;
  align-items:center;  
}
input{
  width:250px;

}


</style>