<template>
  <div class="driver-user">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i> 
    </div>
    perma link goes here 
  </div>  
  
</template>

<script>
  export default {
    name: 'DriverMessaging'
  }
</script>

<style lang="scss" scoped>
  .driver-user {
    height: 100%; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .perma {
      border: 1px solid red;
      height: 10px;
      weight: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
