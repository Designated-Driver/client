<template>
<center>
<div class="card">
  <div class="trip-total" v-if="getTripCost">
    <p>Trip Total: ${{getTripCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</p>    
  </div>
  <br></br> 
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <p>Please enter the total trip cost: </p>
  <input v-model="cost" v-numericOnly/>
  <div :class="wrapperClass">
    <div id="dropin-container"></div>
    <button type="submit" style="padding-top: 1rem;" id="submitTransaction" @click="dropinRequestPaymentMethod">Make a Payment</button>
     <button type="submit" style="padding-top: 1rem;" id="submitTransaction" @click="goHome">Home</button>
  </div>
</div>
</center>
</template>

<script src="https://js.braintreegateway.com/web/dropin/1.10.0/js/dropin.min.js"></script> 

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { numericOnly } from './numericOnly.js'

export default {
  directives: {
    numericOnly
  },
  computed: {
    ...mapGetters([
      'getTripCost'
    ])
  },
  props: {
    authToken: {
      value: String
    },
    wrapperClass: {
      value: String
    },
    loaderClass: {
      value: String
    },
    inputClass: {
      value: String
    },
    collectCardHolderName: {
      value: Boolean
    },
    collectPostalCode: {
      value: Boolean
    },
    enableDataCollector: {
      value: Boolean
    },
    enablePayPal: {
      value: Boolean
    }
  },
  created () {
    this.dropinCreate()

    this.$parent.$on('tokenize', () => {
      this.dropinRequestPaymentMethod()
    })
  },
  data () {
    return {
      errorMessage: '',
      dropinInstance: '',
      dataCollectorPayload: '',
      authTokenTwo: '',
      lastFour: '',
      cost: '',
      errors: []
 
    }
  },
  methods: {
    async dropinCreate () {
      const dropin = require('braintree-web-drop-in')
     
      let uri = 'http://localhost:8081/getClientId'
      await axios({
        url: uri,
        method: 'get'      
      })
        .then((response) => {
          this.authTokenTwo = response.data
          console.log(response)
        })
        .catch((requestErr) => {
          console.log(requestErr)              
        })          
      // setup drop-in options
      const dropinOptions = {
        authorization: this.authTokenTwo,
        selector: '#dropin-container'
      }
      // if PayPal enabled, add to options settings
      if (this.enablePayPal) {
        dropinOptions.paypal = {
          flow: 'vault'
        }
      }
      dropin.create(dropinOptions, (dropinError, dropinInstance) => {
        if (dropinError) {
          this.errorMessage = 'There was an error setting up the client instance. Message: ' + dropinError.message
          this.$emit('bt.error', this.errorMessage)
          return
        }
        this.dropinInstance = dropinInstance
      })
    },

    goHome () {
      this.$router.push('/')
    },
    dropinRequestPaymentMethod () {
      if (!this.cost) this.errors.push('Please enter the trip total')
      else {
        this.dropinInstance.requestPaymentMethod((requestErr, payload) => {
          if (requestErr) {
            this.errorMessage = 'There was an error setting up the client instance. Message: ' + requestErr.message
            this.$emit('bt.error', this.errorMessage)
            return
          }
          let uri = 'http://localhost:8081/checkout'
          console.log('amount: ' + this.cost)
          axios({
            url: uri,
            method: 'post',
            data: {'paymentPayload': payload.nonce, 'amount': this.cost}
          })
            .then((response) => {
              this.lastFour = response.data
              console.log(this.lastFour)
            })
            .catch((requestErr) => {
              console.log(requestErr)              
            })  
        })
      }
    }
  }
}
</script>

<style>
.card {
  width: 50%;
}
.card p {

}
</style>