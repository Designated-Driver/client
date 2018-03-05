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
          <div>
           
            Anjali k.
            
          </div>
          <div>
            
            anjali@email.com
           
          </div>
          <div >
            
            (012) 123-1234
            
          </div>
        </div>
      </div>
      <div class="content-vehicle">
 <div class="text2">
          <div class="Brand">
          
            Toyota
           
          </div>
          <div class="Model">
            
           Corrolla
            
          </div>
          <div class="Year">
            
           2018
            
          </div>
           <div class="Seats">
           
           5
          
          </div>
        </div>
      </div>
     <div class="content-update">
        <div @click="gotosettings" class="submit-button">Make Changes</div>
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
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
       .content-vehicle{
         
   
      justify-content: center;
      align-items: center;
     
      display:flex;
      background:white;
      width: 80%;
      margin: 0 auto;
      color:black;
      border-radius: 10px;
     
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
      .content-update {
    grid-area: submit;
    display: flex;
    justify-content: center;
    align-items: center;
     display:flex;
      background:white;
      width: 80%;
      margin: 0 auto;
      color:black;
      border-radius: 10px;
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
}
</style>
