<template>
  <div class="rider-buttons">
    <div class="tabs" @click="$emit('clickUser')">
      <span class="tabImg">
        <i class="fa fa-user fa-lg"></i>
      </span>
      <span class="tabName">Profile</span>
    </div>
    <div class="tabs" @click="$emit('clickRequestRide')">
      <span class="tabImg">
        <i class="fa fa-car fa-lg"></i>
      </span>
      <span class="tabName">Request Ride</span>
    </div>
    <div class="tabs" @click="$emit('clickVerifyEoR')">
      <span class="tabImg">
        <i class="fa fa-check fa-lg"></i>
      </span>
      <span class="tabName">Verify Arrival</span>
    </div>
    <div class="tabs" @click="$emit('clickSettings')">
      <span class="tabImg">
        <i class="fa fa-cog fa-lg"></i>
      </span>
      <span class="tabName">Settings</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RiderButtons'
  }
</script>

<style lang="scss" scoped>
.rider-buttons {
  width: 100%;
  height: 10vh;
  display: flex;

  .tabs {
    width: 33%;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0 5px;
  }
}
</style>