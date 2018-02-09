<template>
  <div class="rider-friends">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    This is the friends page
  </div>
</template>

<script>
  export default {
    name: 'RiderFriends'
  }
</script>

<style scoped>
.rider-friends {
  height: 100%;
  width: 100%;
}
</style>