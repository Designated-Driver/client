<template>
<center>
<div class="card">
<br></br>
<div class="trip-total" v-if="getTripCost">
          <p>Trip Total: ${{getTripCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</p>    
        </div> 
  <div :class="wrapperClass">
    <div id="dropin-container"></div>
    <button type="submit" style="padding-top: 1rem;" id="submitTransaction" @click="dropinRequestPaymentMethod">Test Payment</button>
  </div>
  </div>
  </center>
</template>

<script src="https://js.braintreegateway.com/web/dropin/1.10.0/js/dropin.min.js"></script> 

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
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
      authTokenTwo: ''
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

    dropinRequestPaymentMethod () {
      this.dropinInstance.requestPaymentMethod((requestErr, payload) => {
        if (requestErr) {
          this.errorMessage = 'There was an error setting up the client instance. Message: ' + requestErr.message
          this.$emit('bt.error', this.errorMessage)
          return
        }

        let uri = 'http://localhost:8081/checkout'
        axios({
          url: uri,
          method: 'post',
          data: {'paymentPayload': payload.nonce}
        })
          .then((response) => {
            console.log('it worked')
          })
          .catch((requestErr) => {
            console.log('requestErr')              
          })  
      })
    }
  }
}
</script>

<style>
.card{
  width: 50%;
}
.card p{

}
</style>