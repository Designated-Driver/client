
<template>
  <div class="rider-user">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
   

    <div class="main-content">

      <div class="content-header">
        <span>Profile </span>
      </div>

      <div class="profile">
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
  display: flex;
  justify-content: center;
  align-items: center;

  .main-content {
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-template-areas:"header_prof"
                        "profile_pg"
                        "car_info"
                        "changing";
    grid-template-rows: 5px, 40px,30px,20px;
    grid-row-gap: 50px;
    
    .content-header {
      //header
      width: 85%;
      height: 35%;
      grid-area: header_prof;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    .profile {
      width: 85%;
      height: 80%;
      grid-area: profile_pg;
      display: flex;
      flex-direction: row;
      grid-area: profile_pg;
      grid-template-areas:
        "photo" "username"
        "photo" "email"
        "photo" "number";
      grid-template-rows: 1fr, 1fr, 1fr;
      grid-template-columns: 15%, 1fr;

      display: flex;
      background: white;
      color: black;
      border-radius: 5px;

      .image {
        grid-area: photo;
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
      .name {
        grid-area: username;
        height: 33%;
        display: flex;
        align-items: center;
       
      }
      .email {
        grid-area: email;
        height: 33%;
        display: flex;
        align-items: center;
        
      }
      .phone {
        grid-area: number;
        height: 33%;
        display: flex;
        align-items: center;
        
      }
    }

    .content-vehicle {
      width: 85%;
      height: 60%;
      grid-area: car_info;
      justify-content: center;
      align-items: center;
      display: flex;
      background: white;
      color: black;
      border-radius: 5px;

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
      width: 85%;
      height: 50%;
      grid-area: changing;
      grid-area: submit;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      color: black;
      border-radius: 5px;

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
