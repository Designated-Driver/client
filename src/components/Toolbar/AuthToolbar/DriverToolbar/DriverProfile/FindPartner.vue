<template>
<div class = "find-partner">
<form @submit.prevent="$emit('submitPartner')">
  <div class = "vue-form">
    <input v-model="auth.email" type="text" placeholder="Verify Your Email ">
    <input v-model="auth.password" type="password" placeholder="Verify Your Password">
    <input v-model="auth.partner" type="text" placeholder="Enter Partner ID">
    <button class="content-update" type = submit>
        <div class="submit-button" @click="submitPartner">Find Partner</div>
    </button>
  </div>
</form>
</div>

</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'FindPartner',
    data () {
      return {
        auth: {
          email: '',
          password: '',
          partner: '',
          accountType: 'driver'
        }
      }
    },
    methods: {
      ...mapActions([
        'findPartnerID'
      ]),
      submitPartner () {
        if (!this.auth.email) {
          console.log('missing input')
        } else {
          this.showSpinner = true
          this.findPartnerID({'email': this.auth.email, 'password': this.auth.password, 'partner': this.auth.partner}).then(() => {
            this.auth.email = ''
            this.auth.password = ''
            this.auth.partner = ''
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .vue-form {
    width: 80%;
    display: flex;
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

</style>
