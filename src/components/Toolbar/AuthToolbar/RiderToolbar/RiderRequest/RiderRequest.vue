<template>
  <div class="rider-request">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    <div class="main-content">
      <div class="main-destination">
        <input type="text" placeholder="Destination">
      </div>
      <div class="main-passenger-count">
        This is passenger count
      </div>
      <div class="main-total">
        This is the total
      </div>
      <div class="main-payment-method">
        payment method
      </div>
      <div class="main-submit">
        This is the submit
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RiderRequest'
  }
</script>

<style lang="scss" scoped>
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
 // background: red;
  display: grid;
  grid-template-areas: "destination"
                       "passenger-count"
                       "total"
                       "payment-method"
                       "submit";
  grid-template-rows: 60px 50px 50px 80px 1fr;

  .main-destination {
    grid-area: destination;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    
    input {
      width: 80%;
      height: 25px;
      
    }
  }

  .main-passenger-count {
    grid-area: passenger-count;
    background-color: blue;

  }

  .main-total {
    grid-area: total;
    background-color: purple;
  }

  .main-payment-method {
    grid-area: payment-method;
    background-color: black;
  }
  
  .main-submit {
    grid-area: submit;
    background-color: blue;
  }

}
</style>