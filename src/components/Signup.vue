<template>
  <div class="signup">
    <h1>Sign up</h1>
  
    <div class="box">
      First Name: 
      <input type="text" name="fname">
    </div>
    <div class="box">
      Last Name: 
      <input type="text" name="lname">
    </div>
    <div class="box">
      Email: 
      <input type="text" name="email">
    </div>
    <div class="box">
      Password: 
      <input type="password" name="password">
    </div>
    <div class="next">
    <router-link to ="/ccinfo">
      <span><input type="submit" value="Next"></span>
    </router-link>
    </div>

    
  </div>
</template>

<script>
  export default {
    name: 'Signup'
  }
</script>

<style lang="scss" scoped>
.signup {
  h1 {
    text-align: center;
  }
  
  .box{
    width: 70%;
    padding: 5% 10%;
    display: flex;
    align-items: center;
  } 
  .next{
    position: absolute;
    right: 0px;
    text-align: center;
    width: 20%;
    border: 1px solid green;
    background-color: green;
  }
}
</style>