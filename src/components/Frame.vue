<template>
  <div class="frame">
    <router-link to="/login">
      <span>Login</span>
    </router-link>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.frame {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

.frame a span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  color: white;
  width: 100px;
  height: 100%;
  border: 1px solid white;
}
</style>