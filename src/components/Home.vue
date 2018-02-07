<template>
  <div class="home">
    <div class="main">
      <gmap-map
        :center="mapData.currentPosition"
        :zoom="14"
        :options="{fullscreenControl: false, mapTypeControl: false, zoomControl: false, streetViewControl: false, styles: [
          {
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#242f3e'
              }
            ]
          },
          {
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#746855'
              }
            ]
          },
          {
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#242f3e'
              }
            ]
          },
          {
            'featureType': 'administrative.locality',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#d59563'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#d59563'
              }
            ]
          },
          {
            'featureType': 'poi.business',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#263c3f'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#6b9a76'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#38414e'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#212a37'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#9ca5b3'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#746855'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#1f2835'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#f3d19c'
              }
            ]
          },
          {
            'featureType': 'transit',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#2f3948'
              }
            ]
          },
          {
            'featureType': 'transit.station',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#d59563'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#17263c'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#515c6d'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#17263c'
              }
            ]
          }
        ]
        }"
        style="width: 100%; height: 100%;"
        >
        <gmap-marker
          :key="index"
          v-for="(m, index) in mapData.markers"
          :position="m.position"
          :clickable="true"
          @click="center=m.position">
        </gmap-marker>
      </gmap-map>
    </div>
    <div class="toolbar" :style="{'height': (toolbar.showLogIn || toolbar.showSignUp) ? '50vh' : '10vh' }">
      <template v-if="!getAuthState">
        <template v-if="(!toolbar.showLogIn && !toolbar.showSignUp)">
          <span @click="clickLogin">Login</span>
          <span @click="clickSignUp">Signup</span>
        </template>
        <template v-else>
          <div class="login" v-if="toolbar.showLogIn">
            <template v-if="!showSpinner">
              <div class="close-toolbar" @click="closeToolbar()">
                <i class="fa fa-times"></i>
              </div>
              <h1>Login</h1>
              <form @submit.prevent="submitLogin()">
                <div class="vue-form login-form">
                  <input v-model="auth.email" type="text" placeholder="Email Address">
                  <input v-model="auth.password" type="auth.password" placeholder="Password">
                </div>
                <button type="submit">Login</button>
              </form>
            </template>
            <ring-loader :loading="showSpinner" class="spinner" v-else></ring-loader>
          </div>
          <div class="signup" v-else-if="toolbar.showSignUp">
            <template v-if="!showSpinner">
              <div class="close-toolbar" @click="closeToolbar()">
                <i class="fa fa-times"></i>
              </div>
              <h1>Create An Account</h1>
              <form @submit.prevent="submitSignUp()">
                <div class="vue-form signup-form">
                  <input v-model="auth.fullName" type="text" placeholder="Full Name">              
                  <input v-model="auth.email" type="text" placeholder="Email Address">
                  <input v-model="auth.password" type="auth.password" placeholder="Password">
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </template>
            <ring-loader :loading="showSpinner" class="spinner" v-else></ring-loader>
          </div>
        </template>
      </template>
      <template v-else>
        Show if user is authenticated
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default {
  name: 'home',
  components: { RingLoader },
  computed: {
    ...mapGetters([
      'getAuthState'
    ])
  },
  mounted () {
    this.getlocation()
  },
  data () {
    return {
      toolbar: {
        showSignUp: false,
        showLogIn: false
      },
      auth: {
        email: '',
        password: '',
        fullName: ''
      },
      showSpinner: false,
      mapData: {
        currentPosition: {lat: 40.696514, lng: -73.997872},
        markers: [
          // {position: {lat: 36.984117, lng: -122.030796}}
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'authenticateUser'
    ]),
    clickLogin () {
      this.toolbar.showLogIn = true
    },
    clickSignUp () {
      this.toolbar.showSignUp = true
    },
    closeToolbar () {
      this.toolbar.showLogIn = false
      this.toolbar.showSignUp = false
    },
    submitLogin () {
      if (!this.auth.email || !this.auth.password) {
        console.log('one of these fields are incomplete')
      } else if (!this.auth.email.includes('@')) {
        console.log('this auth.email doesnt contain @')
      } else {
        this.toolbar.showLogIn = false
      }
    },
    submitSignUp () {
      if (!this.auth.email || !this.auth.password || !this.auth.fullName) {
        console.log('one of these fields are incomplete')
      } else if (!this.auth.email.includes('@')) {
        console.log('this auth.email doesnt contain @')
      } else {
        this.showSpinner = true
        this.authenticateUser({'auth.email': this.auth.email, 'auth.password': this.auth.password}).then(() => {
          this.toolbar.showSignUp = false
          this.showSpinner = false
          this.auth.email = ''
          this.auth.password = ''
          this.auth.fullName = ''
        }).catch(err => {
          console.log(err)
        })
      }
    },
    getlocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.mapData.currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      } else {
        console.log('this browser doesnt support geolocation and probably shouldnt be used')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  position: relative;
  height: 100%;
  width: 100%;

  .main {
    height: 90vh;
    background: gray;
    color: white;
    z-index: 0;
  }

  .toolbar {
    position: absolute;
    bottom: 0px;
    // border-top: 2px solid black;
    background: #38414e;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    transition: all ease-in-out .2s;

    span {
      height: 42px;
      max-height: 70%;
      width: 160px; 
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid gray;
      color: white;
    }

    .login{
      width: 90%;
      height: 90%;
      // border: 1px solid black;
      display: flex;
      flex-direction: column;
      
      h1 {
        // border: 1px solid black;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
      }

      form {
        //border: 1px solid black;
        flex-grow: 1;
        position: relative;
        div {
          //border: 1px solid black;
          margin-top: 20px;
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        
          

          input {
            width: 80%;
            border: 2px solid gray;
            background: white;
            height: 40%;
            font-size: 100%;
            padding-left: 10px;  
          }
        }
  
        button {
          position: absolute;
          bottom: 10px;
          right: 20px;
          border: 2px solid black;
          background: white;
          width: 120px;
          height: 35px;
        }
      }
    }

    .signup, .login {
      width: 90%;
      height: 90%;
      display: flex;
      flex-direction: column;

      h1 {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        color: white;
      }

      form {
        flex-grow: 1;
        position: relative;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .vue-form {
          margin-bottom: 15px;
          height: 180px;
          max-height: calc(100% - 60px);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          input {
            width: 80%;
            border: 2px solid gray;
            background: white;
            height: 40px;
            font-size: 100%;
            padding-left: 10px;
          }      
        }

        .signup-form {
          height: 150px;
        }

        .login-form {
          height: 100px;
        }

        button {
          position: absolute;
          bottom: 0px;
          right: 0px;
          background: white;
          width: 120px;
          height: 35px;
        }
      }

      .spinner {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.close-toolbar {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
