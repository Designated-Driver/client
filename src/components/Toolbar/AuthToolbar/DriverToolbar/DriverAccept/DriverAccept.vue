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
      <div class="main-buttons">
        <div @click="acceptRide" class="accept-button">Accept</div>
        <div @click="clearRide" class="clear-button">Done</div>
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
        'clearRoute',
        'updateTripCost',
        'updateCurrentlyOnTrip'
      ]),
      acceptRide: function () {
        this.setRouteToRider()
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
        this.setRouteToDestination()
      },
      clearRide: function () {
        this.clearRoute()
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
    width: 85%;
    height: 100%;
    grid-template-areas:
    "info" "abutton";
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .main-ride-info {
      width: 50%;
      height: 50%;
      display: flex;
      grid-area: info;
      grid-template-areas:
      "nameSpace"
      "time"
      "question";
      flex-direction: column;

      .rider-name {
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        grid-area: nameSpace;
      }

      .rider-location {
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        grid-area: time;
      }

      .question {
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        grid-area: question;
      }
    }

    .main-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      grid-area: abutton;
      grid-template-areas:
      "acceptb"
      "clearb";
      flex-direction: column;

      .accept-button {
        width: 150px;
        height: 80%;
        background:green;
        color: white;
        border-radius: 5px;
        display: flex;
        grid-area: acceptb;
        justify-content: center;
        align-items: center;
      }
      .clear-button {
        width: 150px;
        height: 80%;
        background:green;
        color: white;
        border-radius: 5px;
        display: flex;
        grid-area: clearb;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>