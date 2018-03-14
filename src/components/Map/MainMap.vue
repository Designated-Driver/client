<template>
  <div class="map">
    <gmap-map
      :center="mapData.mapCenter"
      :zoom="14"
      ref="map"
      @center_changed="updateCenter($refs.map.$mapObject.getCenter())"
      @idle="sync"
      :options="{
        fullscreenControl: false,
        mapTypeControl: false, 
        zoomControl: false, 
        streetViewControl: false,
        styles: mapStyles
      }"
      style="width: 100%; height: 100%;">
      <gmap-marker
          :position="mapData.currentPosition"
          :clickable="true"
          v-if="mapData.showMarkers">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'MainMap',
    data () {
      return {
        mapData: {
          currentPosition: {lat: 36.968965, lng: -122.025568},
          showMarkers: true,
          mapCenter: null
        },
        mapStyles: [
          {
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#242f3e'
              }
            ]
          },
          {
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#746855'
              }
            ]
          },
          {
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#242f3e'
              }
            ]
          },
          {
            'featureType': 'administrative.locality',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#d59563'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#d59563'
              }
            ]
          },
          {
            'featureType': 'poi.business',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#263c3f'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#6b9a76'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#38414e'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#212a37'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#9ca5b3'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#746855'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#1f2835'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#f3d19c'
              }
            ]
          },
          {
            'featureType': 'transit',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#2f3948'
              }
            ]
          },
          {
            'featureType': 'transit.station',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#d59563'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#17263c'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#515c6d'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#17263c'
              }
            ]
          }
        ]
      }
    },
    mounted () {
      this.sync()
    },
    created () {
      this.getlocation()
      this.sync()
    },
    computed: {
      ...mapGetters([
        'getStartLocation',
        'getEndLocation',
        'getGenerateRoute',
        'getCurrentlyOnTrip'
      ])
    },
    watch: {
      'getEndLocation': {
        handler: function (after, before) {
          var directionsService = new window.google.maps.DirectionsService()
          var directionsDisplay = new window.google.maps.DirectionsRenderer()
          directionsDisplay.setMap(this.$refs.map.$mapObject)
          var request = {
            destination: after,
            origin: this.mapData.currentPosition,
            travelMode: window.google.maps.DirectionsTravelMode.DRIVING
          }

          directionsService.route(request, function (response, status) {
            if (status === 'OK') {
              var tripCost = response.routes[0].legs[0].distance.value / 1000 * 2.5
              // Set the cost of the trip here
              this.updateTripCost(tripCost)
            } else {
              console.log('Directions request failed due to ' + status)
            }
          }.bind(this))
        }
      },
      'getGenerateRoute': {
        handler: function (after, before) {
          if (after) {
            var directionsService = new window.google.maps.DirectionsService()
            var directionsDisplay = new window.google.maps.DirectionsRenderer()
            directionsDisplay.setMap(this.$refs.map.$mapObject)

            var destination = this.getEndLocation
            var origin = this.mapData.currentPosition

            var request = {
              destination: destination,
              origin: origin,
              travelMode: window.google.maps.DirectionsTravelMode.DRIVING
            }

            directionsService.route(request, function (response, status) {
              if (status === 'OK') {
                this.mapData.showMarkers = false
                directionsDisplay.setDirections(response)
              } else {
                console.log('Directions request failed due to ' + status)
              }
            }.bind(this))
            this.generateRoute(false)
          }
        }
      }
    },
    methods: {
      ...mapActions([
        'updateStartLocation',
        'updateTripCost',
        'generateRoute'
      ]),
      getlocation () {
        console.log('getting a new thing on new load')
        if (navigator.geolocation) {
          console.log('getting the geolocation')
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(`Updating geolation to ${position.coords.latitude}, ${position.coords.longitude}`)
            this.mapData.mapCenter = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            console.log(this.mapData.mapCenter)
            this.updateStartLocation(this.mapData.mapCenter)
          })
        } else {
          console.log('this browser doesnt support geolocation and probably shouldnt be used')
        }
      },
      updateCenter (latLng) {
        this.mapData.currentPosition = {
          lat: latLng.lat(),
          lng: latLng.lng()
        }
      },
      sync () {
        this.mapData.mapCenter = this.mapData.currentPosition
        if (!this.getCurrentlyOnTrip) {
          console.log('syncing with new data')
          console.log(this.mapData.mapCenter)
          this.updateStartLocation(this.mapData.mapCenter)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.map {
  height: 90vh;
  background: gray;
  color: white;
  z-index: 0;
}
</style>