<template>
  <div class="auth-buttons">
    <span @click="$emit('clickLogin')">Login</span>
    <span @click="$emit('clickSignup')">Signup</span>
  </div>
</template>

<script>
  export default {
    name: 'AuthButtons'
  }
</script>

<style lang="scss" scoped>
.auth-buttons {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    height: 42px;
    max-height: 70%;
    width: 160px; 
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    color: white;
  }
}

</style>