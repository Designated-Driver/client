<template>
  <div class="home">
    <div class="main">
      This is the main map.
    </div>
    <div class="toolbar" :style="{'height': (showLogIn || showSignUp) ? '50%' : '10%' }">
      <template v-if="(!showLogIn && !showSignUp)">
        <span @click="clickLogin">Login</span>
        <span @click="clickSignUp">Signup</span>
      </template>
      <template v-else>
        <div class="login" v-if="showLogIn">
          This is the login
        </div>
        <div class="signup" v-else-if="showSignUp">
          <h1>Create An Account</h1>
          <form @submit.prevent="submitSignUp()">
            <div>
              <input v-model="fullName" type="text" placeholder="Full Name">              
              <input v-model="email" type="text" placeholder="Email Address">
              <input v-model="password" type="password" placeholder="Password">
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      showSignUp: true,
      showLogIn: false,
      email: '',
      password: '',
      fullName: ''
    }
  },
  methods: {
    clickLogin () {
      this.showLogIn = true
    },
    clickSignUp () {
      this.showSignUp = true
    },
    submitSignUp () {
      console.log('you submit the form')
      if (!this.email.includes('@')) {
        console.log('this email doesnt contain @')
        // show on UI the email needs to contain @
      }
      this.showSignUp = false
      // catch other conditions
      // otherwise
      // submit to firebase auth
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
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    transition: all ease-in-out .2s;

    span {
      height: 46px;
      width: 160px; 
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
    }

    .signup {
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
        // border: 1px solid black;
        flex-grow: 1;
        position: relative;
        div {
          margin-top: 20px;
          height: 175px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;

          input {
            width: 80%;
            border: 2px solid gray;
            background: white;
            height: 28%;
            font-size: 100%;
            padding-left: 10px;
          }
        }

        button {
          position: absolute;
          bottom: 20px;
          right: 20px;
          border: 2px solid black;
          background: white;
          width: 120px;
          height: 35px;
        }
      }

    }
  }
}
</style>
