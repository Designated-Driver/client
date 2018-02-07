<template>
  <div class="home">
    <div class="main">
      <gmap-map
        :center="{lat:36.974117, lng:-122.030796}"
        :zoom="14"
        style="width: 100%; height: 100%;"
      ></gmap-map>
    </div>
    <div class="toolbar" :style="{'height': (showLogIn || showSignUp) ? '50vh' : '10vh' }">
      <template v-if="!getAuthState">
        <template v-if="(!showLogIn && !showSignUp)">
          <span @click="clickLogin">Login</span>
          <span @click="clickSignUp">Signup</span>
        </template>
        <template v-else>
          <div class="login" v-if="showLogIn">
            <template v-if="!showSpinner">
              <div class="close-toolbar" @click="closeToolbar()">
                <i class="fa fa-times"></i>
              </div>
              <h1>Login</h1>
              <form @submit.prevent="submitLogin()">
                <div class="vue-form login-form">
                  <input v-model="email" type="text" placeholder="Email Address">
                  <input v-model="password" type="password" placeholder="Password">
                </div>
                <button type="submit">Login</button>
              </form>
            </template>
            <ring-loader :loading="showSpinner" class="spinner" v-else></ring-loader>
          </div>
          <div class="signup" v-else-if="showSignUp">
            <template v-if="!showSpinner">
              <div class="close-toolbar" @click="closeToolbar()">
                <i class="fa fa-times"></i>
              </div>
              <h1>Create An Account</h1>
              <form @submit.prevent="submitSignUp()">
                <div class="vue-form signup-form">
                  <input v-model="fullName" type="text" placeholder="Full Name">              
                  <input v-model="email" type="text" placeholder="Email Address">
                  <input v-model="password" type="password" placeholder="Password">
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
  data () {
    return {
      showSignUp: false,
      showLogIn: false,
      email: '',
      password: '',
      fullName: '',
      showSpinner: false
    }
  },
  methods: {
    ...mapActions([
      'authenticateUser'
    ]),
    clickLogin () {
      this.showLogIn = true
    },
    clickSignUp () {
      this.showSignUp = true
    },
    closeToolbar () {
      this.showLogIn = false
      this.showSignUp = false
    },
    submitLogin () {
      if (!this.email || !this.password) {
        console.log('one of these fields are incomplete')
      } else if (!this.email.includes('@')) {
        console.log('this email doesnt contain @')
      } else {
        this.showLogIn = false
      }
    },
    submitSignUp () {
      if (!this.email || !this.password || !this.fullName) {
        console.log('one of these fields are incomplete')
      } else if (!this.email.includes('@')) {
        console.log('this email doesnt contain @')
      } else {
        this.showSpinner = true
        this.authenticateUser({'email': this.email, 'password': this.password}).then(() => {
          this.showSignUp = false
          this.showSpinner = false
          this.email = ''
          this.password = ''
          this.fullName = ''
        }).catch(err => {
          console.log(err)
        })
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
    border-top: 2px solid black;
    background: white;
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
      border: 2px solid black;
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
  border: 1px solid gray;
  border-radius: 50%;
}
</style>
