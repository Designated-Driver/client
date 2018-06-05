<template>
  <div class="driver-user">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i> 
    </div>
    <div class="main-content">
      <div class="main-ride-info">
        <div class="rider-name">
          <span>{{getRiderName}}</span>
        </div>
        <div class="rider-location">
          <span>5 Minutes Away</span>
        </div>
        <div class="question">
          <span>Accept the ride?</span>
        </div>
      </div>
      <div class="main-accept">
        <div @click="acceptRide" class="accept-button">Accept</div>
      </div>
    </div>
  </div>  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import axios from 'axios'
  export default {
    name: 'DriverAccept',
    computed: {
      ...mapGetters([
        'getTripCost',
        'getRiderName'
      ])
    },
    methods: {
      ...mapActions([
        'setRouteToRider',
        'setRouteToDestination',
        'retrieveRequest',
        'generateRoute',
        'updateTripCost',
        'updateCurrentlyOnTrip'
      ]),
      acceptRide: function () {
        this.setRouteToDestination()
        this.generateRoute(true)
        this.updateTripCost(null)
        this.updateCurrentlyOnTrip(true)
        axios.get(`http://localhost:8081/acceptRide`, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        }).then(response => {
          console.log(response)
          this.$emit('closeToolbar')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .driver-user {
    height: 100%; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-content {
    width: 100%;
    height: 100%;
    grid-template-areas:
    "info" "abutton";
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .main-ride-info {
      width: 80%;
      height: 85%;
      display: flex;
      grid-area: info;
      grid-template-areas:
      "nameSpace"
      "time"
      "question";
      grid-template-rows: 1fr, 1fr, 1fr; 

      .rider-name {
        width: 80%;
        height: 85%;
        grid-area: nameSpace;
      }

      .rider-location {
        width: 80%;
        height: 85%;
        grid-area: time;
      }

      .question {
        width: 80%;
        height: 85%;
        grid-area: question;
      }
    }

    .main-accept {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      grid-area: abutton;

      .accept-button {
        width: 80%;
        height: 80%;
        background:green;
        color: white;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>