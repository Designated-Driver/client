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
    data () {
      return {
        destination: '',
        numPeople: 1
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
</style>