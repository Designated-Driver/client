<template>
  <div class="driver-buttons">
<<<<<<< HEAD
    <div class="tabs" @click="$emit('clickProfile')">
=======
    <div class="tabs" @click="$emit('clickUser')">
>>>>>>> Test-Merge
      <span class="tabImg">
        <i class="fa fa-user fa-lg"></i>
      </span>
      <span class="tabName">Profile</span>
    </div>
<<<<<<< HEAD
=======
    <div class="tabs" @click="$emit('clickAccept')">
      <span class="tabImg">
        <i class="fa fa-car fa-lg"></i>
      </span>
      <span class="tabName">Accept</span>
    </div>
    <div class="tabs" @click="$emit('clickMessaging')">
      <span class="tabImg">
        <i class="fa fa-envelope fa-lg"></i>
      </span>
      <span class="tabName">Messages</span>
    </div>
>>>>>>> Test-Merge
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
    name: 'DriverButtons'
  }
</script>

<style lang="scss" scoped>
.driver-buttons {
  width: 100%;
  height: 10vh;
  display: flex;
<<<<<<< HEAD

  .tabs {
    width: 25%;
=======
  .tabs {
    width: 50%;
>>>>>>> Test-Merge
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0 5px;
  }
}
</style>