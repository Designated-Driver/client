<template>
  <div class="driver-settings">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    <div class="main-content">
      <div class="settings">
      <span>
        Settings
      </span>
      </div>
      <div class="profile">
        <div class="image">
          <img src="http://www.pvhc.net/img23/rhpjcvoyfukbbdaabcga.png">
        </div>
        <div class="text">
          <div class="name">
            <span>
            {{getDisplayName}}
            </span>
          </div>
          <div class="email">
            <span>
            {{getDisplayEmail}}
            {{getDisplayID}}
            </span>
          </div>
          <div class="phone" v-if="getDisplayPhoneNumber">
            <span>
            {{getDisplayPhoneNumber}}
            </span>
          </div>
        </div>
      </div>
      <div class="card-info">
        <i class="fa fa-cc-visa"></i>
        <span>Card Methods</span>
      </div>
      <div class="vehicle-information">
        <div class="car-title">
          <i class="fa fa-car"></i>
          <h1>Vehicle Information</h1>
        </div>
        <div class="vehi-info">
          <div class="car-make">
            {{getDisplayCarMake}}
          </div>
          <div class="car-model">
            {{getDisplayCarModel}}
          </div>
          <div class="car-year">
            {{getDisplayCarYear}}
          </div>

        </div>
      </div>
      <div class="ride-history">
        <i class="fa fa-history"></i>
        <span>driver History</span>
      </div>
      <div class="about" @click="this.showAboutPage">
        <i class="fa fa-info"></i>
        <span>About Designated Driver Service</span>
      </div>
      <div class="permissions">
        <i class="fa fa-bell"></i>
        <span>Application Permissions</span>
      </div>
      <div class="sign-out">
        <div @click="toggleMessages">
          <span>Click here to get messages token</span>
        </div>
        <div class="logout" @click="logout">
          <span>Log Out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'DriverSetting',
    computed: {
      ...mapGetters([
        'getDisplayName',
        'getDisplayEmail',
        'getDisplayPhoneNumber',
        'getDisplayCarMake',
        'getDisplayCarModel',
        'getDisplayCarYear',
        'getDisplayID'
      ])
    },
    methods: {
      ...mapActions([
        'logoutUser',
        'toggleMessaging',
        'showAboutPage'
      ]),
      logout () {
        this.logoutUser()
      },
      toggleMessages () {
        this.toggleMessaging()
      }
    }
  }
</script>

<style lang="scss" scoped>
.driver-settings {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.main-content {
  height: calc(100% - 20px);
  width: calc(100% - 20px);
 // background: blue;
  display: grid;
  grid-template-areas:  "settings"
                        "profile"
                        "payments"
                        "vehicle"
                        "ride-history"
                        "permissions"
                        "about"
                        "documents"
                        "sign-out";
  grid-template-rows: 120px 100px 60px 60px 60px 60px 60px 1fr;

  .settings {
    grid-area: settings;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 60px;
    margin-top: 20px;
  }

  .profile {
    display: flex;
    flex-direction: row;
    grid-area: profile;
    
    .image {
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
      background: white;
        max-height: 80%;
        max-width: 80%;
        border-radius: 50%;
      }
    }

    .text {
      height: 100%;
      flex-grow: 1;

      .name, .email, .phone {
        height: 33%;
        display: flex;
        align-items: center;
        span {
          padding-left: 30px;
        }
      }
    }
  }

  .card-info {
    
    grid-area: payments;
    height: 60px;
    display: flex;
    justify-content: left;
    align-items: center;

    i {
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .vehicle-information {
    grid-area: vehicle;
    width: 100%;
    height: 100%;
    align-items: flex-start;

    .car-title{
      width: 100%;
      display: flex;
      justify-content: left;
      align-item: center;
      i {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h1{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    
    .vehi-info{
      height: 70%;
      width: 80%;
      display: flex;
      background: white;
      justify-content: center;
      align-items: center;
      color: black;
      border-radius: 5px;
      grid-template-areas: "car-type" "car-model" "car-year";
      grid-template-columns: 33%, 33%, 33%;
    
      .car-make {
        width: 100%;
        height: 100%;
        grid-area: car-type;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .car-model {
        grid-area: car-model;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .car-year {
        grid-area: car-year;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .ride-history {
    grid-area: ride-history;
    height: 60px;    
    display: flex;
    justify-content: left;
    align-items: center;

    i {
      width: 60px;
      height: 100%;  
      display: flex;
      justify-content: center;
      align-items: center;    
    }
  }

  .about {
    grid-area: about;
    height: 60px;    
    display: flex;
    justify-content: left;
    align-items: center;

    i {
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .permissions {
    grid-area: permissions;
    height: 60px;    
    display: flex;
    justify-content: left;
    align-items: center;

    i {
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .sign-out {
    grid-area: sign-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logout {
      width: 90%;
      background: white;
      color: black;
      align-self: center;
      border-radius: 5px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  a {
    color: white;
  }
}
</style>