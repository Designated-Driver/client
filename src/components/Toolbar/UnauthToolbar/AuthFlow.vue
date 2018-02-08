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
          <button type="submit">Login</button>
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
          <div class="vue-form signup-form">
            <input v-model="auth.fullName" type="text" placeholder="Full Name">              
            <input v-model="auth.email" type="text" placeholder="Email Address">
            <input v-model="auth.password" type="password" placeholder="Password">
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </template>
      <ring-loader :loading="showSpinner" class="spinner" v-else></ring-loader>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthFlow',
    data () {
      return {
        showSpinner: false
      }
    },
    props: [ 'auth', 'toolbar' ]
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
</style>