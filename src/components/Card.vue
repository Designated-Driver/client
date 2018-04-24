<template>
<div>
  <div class="home">
    <main-map/>
    <toolbar/>
  </div>
  <br></br>
  <div class="card">
  <center>
    <div :class="wrapperClass">
    <div class="trip-total" v-if="getTripCost">
          <span>Trip Total: ${{getTripCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span>    
        </div> 
    <div id="dropin-container"></div>
    
    <center>
    <div class="popup">
    <button type="submit" style="padding-top: 1rem; background: black;" id="submitTransaction" @click="confirm">Confirm to Pay</button>
     <span class="popuptext" id="popupp" @click="dropinRequestPaymentMethod">Yes</span>
    </div>
    <button type="submit" style="padding-top: 1rem; background: black;" @click="goHome"> Return Home</button>

    </center>
  </div>
  </center>
</div>
  </div>
 </template>

<script src="https://js.braintreegateway.com/web/dropin/1.10.0/js/dropin.min.js"></script>
<script src="https://www.paypalobjects.com/api/checkout.js" data-version-4></script> 
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'card',
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
      goHome: function () {
        this.$router.push('/')
      },
      confirm: function () {
        var popup = document.getElementById('popupp')
        popup.classList.toggle('show')
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
.card{
  padding-top: 1rem;
  width: 50%;
  position:absolute;
  margin-left:350px;

}
.popup {
    position: relative;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
/* The actual popup (appears on top) */
.popup .popuptext {
    visibility: hidden;
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 50%;
    height:50%;
    left: 50%;
    margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
    from {opacity: 0;} 
    to {opacity: 1;}
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
}
</style>


