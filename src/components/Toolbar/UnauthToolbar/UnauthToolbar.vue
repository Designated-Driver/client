<template>
  <div class="unauth-toolbar" :style="{'height': (toolbar.showLogIn || toolbar.showSignUp) ? '350px' : '10vh' }">
    <auth-buttons
      v-if="(!toolbar.showLogIn && !toolbar.showSignUp)"
      @clickLogin="clickLogin"
      @clickSignup="clickSignUp"
    />

    <auth-flow
      v-else
      :toolbar="toolbar"
      :auth="auth"
      :showSpinner="showSpinner"
      @submitLogin="submitLogin"
      @submitSignUp="submitSignUp"
      @closeToolbar="closeToolbar"
    />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import AuthButtons from './AuthButtons' // Buttons that open up the AuthFlow
  import AuthFlow from './AuthFlow' // Handles authentication for user
  export default {
    name: 'UnauthToolbar',
    components: { AuthButtons, AuthFlow },
    data () {
      return {
        toolbar: {
          showSignUp: false,
          showLogIn: false
        },
        auth: {
          email: '',
          password: '',
          fullName: '',
          carMake: '',
          carModel: '',
          carYear: '',
          ID: '',
          partner: '',
          accountType: 'rider'
        },
        showSpinner: false
      }
    },
    methods: {
      ...mapActions([
        'authenticateUser',
        'loginUser'
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
          this.showSpinner = true
          this.loginUser({'email': this.auth.email, 'password': this.auth.password}).then(() => {
            this.toolbar.showLogIn = false
            this.showSpinner = false
            this.auth.email = ''
            this.auth.password = ''
          }).catch(err => {
            console.log(err)
          })
        }
      },
      submitSignUp () {
        if (!this.auth.ID || !this.auth.email || !this.auth.password || !this.auth.fullName || !this.auth.carMake || !this.auth.carModel || !this.auth.carYear) {
          console.log('one of these fields are incomplete')
        } else if (!this.auth.email.includes('@')) {
          console.log('this auth.email doesnt contain @')
        } else {
          this.showSpinner = true
          this.authenticateUser({'ID': this.auth.ID, 'carMake': this.auth.carMake, 'carModel': this.auth.carModel, 'carYear': this.auth.carYear, 'email': this.auth.email, 'password': this.auth.password, 'fullName': this.auth.fullName, 'accountType': this.auth.accountType, 'partner': this.auth.partner}).then(() => {
            this.toolbar.showSignUp = false
            this.showSpinner = false
            this.auth.email = ''
            this.auth.password = ''
            this.auth.fullName = ''
            this.auth.carMake = ''
            this.auth.carModel = ''
            this.auth.carYear = ''
            this.auth.ID = ''
            this.auth.partner = ''
            this.$router.push('/addCard')
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style lang="scss">
.unauth-toolbar {
  transition: all ease-in-out .2s;
}
</style>
