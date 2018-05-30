<template>
  <div class="driver-user">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i> 
    </div>
    driver accept goes here
  </div>  
  
</template>

<script>
  export default {
    name: 'DriverAccept'
  }
</script>

<style lang="scss" scoped>
  .driver-user {
    height: 100%; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>