<template>
  <div class="rider-user">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    <div class="main-content">
      <div class="content-header">
        <span>Profile </span>
      </div>
      <div class="content-profile">   
        <div class="image">
          <img src="https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg">
        </div>
        <div class="text">
          <div class="name">
            <span>
            Anjali k.
            </span>
          </div>
          <div class="email">
            <span>
            anjali@email.com
            </span>
          </div>
          <div class="phone">
            <span>
            (012) 123-1234
            </span>
          </div>
        </div>
      </div>
      <div class="content-vehicle">
 <div class="text2">
          <div class="Brand">
            <span>
            Toyota
            </span>
          </div>
          <div class="Model">
            <span>
           Corrolla
            </span>
          </div>
          <div class="Year">
            <span>
           2018
            </span>
          </div>
           <div class="Seats">
            <span>
           5
            </span>
          </div>
        </div>
      </div>
      <div class="content-update">
        <span>Should install a button here that goes to settings page </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RiderUser'
  }
</script>

<style lang="scss" scoped>
.rider-user {
  height: 100%;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  .main-content {
    height: calc(100% - 20px);
    
    width: calc(100% - 20px);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    >div{
      border: 1px solid black;
      width: 100%;
      height: 20%;
    }
    .content-header{
      text-align:center;
      font-size: 24px;
      color: white;
      height: 24px;
    }
    .content-profile{
      display:flex;
      background:white;
      width: 80%;
      margin: 0 auto;
      color:black;
      border-radius: 10px;
      
          .image {
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-height: 80%;
        max-width: 80%;
        border-radius: 50%;
      }
    }
    .text {
      height: 100%;
      flex-grow: 1;
      .name, .email, .phone {
        height: 33%;
        display: flex;
        align-items: center;
        span {
          padding-left: 30px;
        }
      }
    }
     
    }
       .content-vehicle{
      display:flex;
      background:white;
      width: 80%;
      margin: 0 auto;
      color:black;
      border-radius: 10px;
     
    
      
         
    
     
    }
        .content-update{
      display:flex;
      background:white;
      width: 80%;
      margin: 0 auto;
      color:black;
      border-radius: 10px;
      text-align: center;
      text-align: justify;
      
         
    
     
    }
  }
}
</style>
