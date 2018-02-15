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
        <div class="container">
          <div class="card-info">
            <div class="card-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1280px-Visa.svg.png" alt="card">          
            </div>
            <span>**** 4832 - Debit</span>
          </div>
          <span><i class="fa fa-pencil"></i></span>
        </div>
      </div>
      <div class="main-submit">
        <div class="submit-button">Request Ride</div>
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
  display: grid;
  grid-template-areas: "destination"
                       "passenger-count"
                       "total"
                       "payment-method"
                       "submit";
  grid-template-rows: 60px 50px 30px 60px 1fr;

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
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      color: black;
      height: 80%;
      width: 80%;
      display: flex;
      background: white;
      border-radius: 5px;
      justify-content: space-around;
      align-items: center;

      .card-info {
        width: 85%;
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

        span {
          flex-grow: 1;
          font-family: Quantico;
          padding-left: 10px;
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
    grid-area: submit;
    display: flex;
    justify-content: center;
    align-items: center;

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
</style>