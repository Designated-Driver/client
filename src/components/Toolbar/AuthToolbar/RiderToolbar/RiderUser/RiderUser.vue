<template>
  <div class="rider-user">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    This is the users page
  </div>
</template>

<script>
  export default {
    name: 'RiderUser'
  }
</script>

<style lang="scss" scoped>
.rider-user {
  height: 100%;
  width: 100%;
}
</style>