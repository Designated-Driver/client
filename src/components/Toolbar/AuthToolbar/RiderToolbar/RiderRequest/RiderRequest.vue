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
        <div class="buttons">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4+</div>
        </div>
      </div>
      <div class="main-total">
        Total: 
      </div>
      <div class="main-payment-method">
        Payment method: 
      </div>
      <div class="main-submit">
        <button type="submit">Submit</button>
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
  //background: red;
  display: grid;
  grid-template-areas: "destination"
                       "passenger-count"
                       "total"
                       "payment-method"
                       "submit";
  grid-template-rows: 60px 50px 50px 60px 1fr;

  .main-destination {
    grid-area: destination;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: black;
    
    input {
      width: 80%;
      height: 25px;
      
    }
  }

  .main-passenger-count {
    grid-area: passenger-count;
    //background-color: blue;
    display: flex;
    justify-content: center;

    .buttons {
      //background-color: red;
      display:flex;
      justify-content: center;
      align-items: center;
      width: 80%;

      div {
        width: 25%;
        height: 30px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;

      }
    }

  }

  .main-total {
    grid-area: total;
    //background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .main-payment-method {
    grid-area: payment-method;
    //background-color: black;
  }
  
  .main-submit {
    grid-area: submit;
    background-color: blue;
  }

}
</style>