<template>
  <div class="driver-messaging">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i> 
    </div>
    <div class="perma">
      <input v-model="auth.chatLink" type="text" placeholder="Discord perma-link">
      <button type="submit">Save</button>
    </div>
  </div>  
  
</template>

<script>
  export default {
    name: 'DriverMessaging',
    props: [ 'auth' ]
  }
</script>

<style lang="scss" scoped>
  .driver-messaging {
    height: 100%; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .perma {
      border: 1px solid red;
      height: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>