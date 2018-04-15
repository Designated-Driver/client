<template>
<div>
  <div class="home">
    <main-map/>
    <toolbar/>
  </div>
    <div :class="wrapperClass">
    <div id="dropin-container"></div>

    <button type="submit" style="padding-top: 1rem;" id="submitTransaction" @click="dropinRequestPaymentMethod">Drop-in Test</button>
  </div>

  </div>
 </template>

<script src="https://js.braintreegateway.com/web/dropin/1.10.0/js/dropin.min.js"></script> 
<script>
  import Toolbar from './Toolbar/Toolbar'
  import MainMap from './Map/MainMap'
  export default {
    name: 'home',
    components: {Toolbar, MainMap},
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
        paymentPayload: '',
        dataCollectorPayload: ''
      }
    },
    methods: {
      dropinCreate () {
        const dropin = require('braintree-web-drop-in')

        // setup drop-in options
        const dropinOptions = {
          authorization: this.authToken,
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
      dropinRequestPaymentMethod: function () {
        this.dropinInstance.requestPaymentMethod((requestErr, payload) => {
          if (requestErr) {
            this.errorMessage = 'There was an error setting up the client instance. Message: ' + requestErr.message
            this.$emit('bt.error', this.errorMessage)
            return
          }

          this.paymentPayload = payload
          // do something with the payload/nonce
        })
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
}
</style>


