<template>
  <div id="drop-in-app">
    <dropin
      wrapperClass="constrain"
      :authToken="authToken"
      :collectCardHolderName="true"
      :enableDataCollector="true"
      :enablePayPal="true"
    >
    </dropin>
    <router-view></router-view>
  </div>

  
</template>

<script>
// import axios from 'axios'
import Dropin from '@/components/Card.vue'
export default {
  name: 'drop-in-app',
  components: {
    Dropin
  },

  data () {
    return {
      authToken: ''
    }
  },

  methods: {
    btHFError (message) {
      console.error(message)
      // do something with the error message
    },
    btHFPayload (payload) {
      console.log(payload)
      // do something with the token payload
    }
  }
}
</script>

<style>
button, input[type="submit"] {
  background-color: #FF6B00;
  display: inline-block;
  border: none;
  padding: .625rem 0.625rem;
  margin: 1px;
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
}

button[type="submit"] {
  margin-top: .625rem;
  background-color: #44a948;
}

button[type="submit"]:disabled {
   background-color: #E6E6E6;
}

button.card {
  background-color: black;
  color: #44a948;
  font-weight: 600;
}
</style>
