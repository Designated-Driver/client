<template>
  <div class="rider-settings">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    This is the settings page
  </div>
</template>

<script>
  export default {
    name: 'RiderSettings'
  }
</script>

<style lang="scss" scoped>
.rider-settings {
  height: 100%;
  width: 100%;
}
</style>