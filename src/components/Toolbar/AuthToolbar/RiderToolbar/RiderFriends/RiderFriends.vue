<template>
  <div class="rider-friends">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    <div class="main-content">
      <div class="friends" @click="toggleFriends(0)">Friends</div>
      <div class="find-friends" @click="toggleFriends(1)">Find Friends</div>
      <div class="main">
        <find-friends v-if="showFindFriends"></find-friends>
        <show-friends v-else-if="showShowFriends"></show-friends>
      </div>
    </div>
  </div>
</template>

<script>
  import FindFriends from './FriendSelect/FindFriends'
  import ShowFriends from './FriendSelect/ShowFriends'
  export default {
    name: 'RiderFriends',
    components: { FindFriends, ShowFriends },
    data () {
      return {
        showFindFriends: true,
        showShowFriends: false
      }
    },
    methods: {
      toggleFriends (choice) {
        switch (choice) {
          case 0:
            this.showFindFriends = true
            this.showShowFriends = false
            break
          case 1:
            this.showFindFriends = false
            this.showShowFriends = true
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.rider-friends {
  height: 100%;
  width: 100%;

  .main-content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas: 
    "main main"
    "friends find-friends";
    grid-template-rows: 85% 15%;
    grid-template-columns: 50% 50%;

    .friends, .find-friends {
      display: flex;
      justify-content: center;
      align-items: center; 
    }

    .friends {
      grid-area: friends;
    }

    .find-friends {
      grid-area: find-friends;
    }

    .main {
      grid-area: main;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>