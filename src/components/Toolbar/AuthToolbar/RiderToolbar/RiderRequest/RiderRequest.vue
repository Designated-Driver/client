<template>
  <div class="rider-request">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    This is the requests page
  </div>
</template>

<script>
  export default {
    name: 'RiderRequest'
  }
</script>

<style scoped>
.rider-request {
  height: 100%;
  width: 100%;
}
</style>