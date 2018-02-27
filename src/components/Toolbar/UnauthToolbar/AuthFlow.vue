<template>
  <div class="auth-flow">
    <div class="login" v-if="toolbar.showLogIn">
      <template v-if="!showSpinner">
        <div class="close-toolbar" @click="$emit('closeToolbar')">
          <i class="fa fa-times"></i>
        </div>
        <h1>Login</h1>
        <form @submit.prevent="$emit('submitLogin')">
          <div class="vue-form login-form">
            <input v-model="auth.email" type="text" placeholder="Email Address">
            <input v-model="auth.password" type="password" placeholder="Password">
          </div>
          <div class="button">
            <a @click="openAboutPage">        
              <span>About This App</span>
            </a>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </template>
      <ring-loader :loading="showSpinner" class="spinner" v-else></ring-loader>
    </div>
    <div class="signup" v-else-if="toolbar.showSignUp">
      <template v-if="!showSpinner">
        <div class="close-toolbar" @click="$emit('closeToolbar')">
          <i class="fa fa-times"></i>
        </div>
        <h1>Create An Account</h1>
        <form @submit.prevent="$emit('submitSignUp')">
          <div class="account-type">
            <span>
              <input id="riderCheckBox" name="accountType" value="rider" v-model="auth.accountType" type="radio">
              <label for="riderCheckBox">Rider</label>
            </span>
            <span>
              <input id="driverCheckBox" name="accountType" value="driver" v-model="auth.accountType" type="radio">
              <label for="driverCheckBox">Driver</label>
            </span>
          </div>
          <div class="vue-form signup-form">
            <input v-model="auth.fullName" type="text" placeholder="Full Name">              
            <input v-model="auth.email" type="text" placeholder="Email Address">
            <input v-model="auth.password" type="password" placeholder="Password">
          </div>
          <div class="button">
            <a @click="openAboutPage">     
              <span>About This App</span>
            </a>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </template>
      <ring-loader :loading="showSpinner" class="spinner" v-else></ring-loader>
    </div>
  </div>
</template>

<script>
  import RingLoader from 'vue-spinner/src/RingLoader'
  import { mapActions } from 'vuex'
  export default {
    name: 'AuthFlow',
    components: { RingLoader },
    props: [ 'auth', 'toolbar', 'showSpinner' ],
    methods: {
      ...mapActions([
        'showAboutPage'
      ]),
      openAboutPage: function () {
        this.showAboutPage(true)
      }
    }
  }
</script>

<style lang="scss" scoped>
.auth-flow {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

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

    a {
      color: white;
      text-decoration: none;
    }

    form {
      flex-grow: 1;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .account-type {
        // height: 20px;
        width: 80%;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-around;
      }

      .vue-form {
        margin-bottom: 15px;
        height: 180px;
        max-height: calc(100% - 60px);
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        input {
          width: 100%;
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

      .button {
        display: flex;
        justify-content: space-between;
        width: 85%;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button {
          background: white;
          width: 120px;
          height: 35px;
        }
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
</style>