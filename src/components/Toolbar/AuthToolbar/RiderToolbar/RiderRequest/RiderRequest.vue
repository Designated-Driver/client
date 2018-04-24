<template>
  <div class="rider-request">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    <div class="main-content">
      <div class="main-destination">
        <gmap-autocomplete @place_changed="setPlace" placeholder="Enter your destination"/>
      </div>
      <div class="main-passenger-count">
        <div class="buttons">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4+</div>
        </div>
      </div>
      <div class="main-payment-method">
        <div class="trip-total" v-if="getTripCost">
          <span>Trip Total: ${{getTripCost.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</span>    
        </div>  
        <div class="container" :class="{'top-borders': !getTripCost}">      
          <div class="card-info">
            <div @click="addCard">Add Payments</div>         
          </div>
        </div>
      </div>
      <div class="main-submit">
        <div @click="requestRide" class="submit-button">Request Ride</div>
      </div>
    </div>
  </div>
</template>
<script src="https://js.braintreegateway.com/web/dropin/1.10.0/js/dropin.min.js"></script> 
<script>
  import { mapGetters, mapActions } from 'vuex'
  // import axios from 'axios'
  export default {
    name: 'RiderRequest',
    computed: {
      ...mapGetters([
        'getStartLocation',
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
        destination: '',
        numPeople: 1,
        errorMessage: '',
        dropinInstance: '',
        paymentPayload: '',
        dataCollectorPayload: ''
      }
    },
    methods: {
      ...mapActions([
        'updateEndLocation',
        'generateRoute',
        'updateTripCost',
        'updateCurrentlyOnTrip'
      ]),
      updatePaymentMethod: function () {
        console.log('open the page to update the payment methods')
      },

      requestRide: function () {
        this.generateRoute(true)
        this.$emit('closeToolbar')
        this.updateTripCost(null)
        this.updateCurrentlyOnTrip(true)
        // axios.get(`http://localhost:5000/designated-driv/us-central1/requestRide?startPosLat=${this.getStartLocation.lat}&startPosLng=${this.getStartLocation.lng}&endPosLat=${this.destination.lat}&endPosLng=${this.destination.lng}&numPeople=3&riderID=PkC76L7fxUbkqsVx94gE1S693tu1`, {
        //   headers: {
        //     'Access-Control-Allow-Origin': '*'
        //   }
        // }).then(response => {
        //   console.log(response)
        //   this.$emit('closeToolbar')
        // }).catch(err => {
        //   console.log(err)
        // })
      },
      addCard: function () {
        this.$router.push('/card')
      },

      setPlace: function (place) {
        if (place.place_id) {
          this.destination = {'lat': place.geometry.location.lat(), 'lng': place.geometry.location.lng()}
          this.updateEndLocation(this.destination)
        } else {
          console.log('this place doesnt work')
        }
      }
    },
    watch: {
      'destination': {
        handler: function (after, before) {
          console.log(`The start location is ${this.getStartLocation.lat}, ${this.getStartLocation.lng}`)
          // Do some code here
        }
      }
    },
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
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Quantico');

.rider-request {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .main-destination {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    
    input {
      width: 80%;
      height: 40px;
      background: white;
      border-radius: 5px;
      font-size: 100%;
    }
  }

  .main-passenger-count {
    display: flex;
    justify-content: center;
    height: 40px;

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      // border-radius: 10px;

      div {
        color: black;
        background: white;
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        &:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }

        &:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }

  .main-payment-method {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100px;

    .trip-total {
      width: 80%;
      height: 34%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: black;
      background: white;
      display: flex;
      align-items: center;
    }

    .container {
      color: black;
      height: 50%;
      width: 80%;
      display: flex;
      flex-direction: column;
      background: white;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      justify-content: center;
      align-items: center;

      .card-info {
        height: 66%;
        background: white;
        color: black;        
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .card-image {
          width: 50px;
          display: flex;
          justify-content: center;
          img {
            max-height: 20px;
            max-width: 35px;
          }
        }
      }

      >span {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  
  .main-submit {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    .submit-button {
      width: 80%;
      height: 80%;
      background: white;
      color: black;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.top-borders {
  border-radius: 5px;
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