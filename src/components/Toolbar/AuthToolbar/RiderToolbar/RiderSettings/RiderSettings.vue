<template>
  <div class="rider-settings">
    <div class="close-toolbar" @click="$emit('closeToolbar')">
      <i class="fa fa-times"></i>
    </div>
    <div class="main-content">
      <div class="settings">
      <span>
        Settings
      </span>
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
      <div class="payments">
        This is the payment.
      </div>
      <div class="ride-history">
        This is the ride history page.
      </div>
      <div class="about">
        <span>This is the&nbsp;</span>
        <router-link to="about">        
          <span>about</span>
        </router-link>
         <span>&nbsp;page.</span>
      </div>
      <div class="documents">
        This has vehicle information.
      </div>
      <div class="sign-out">
        This is to sign out.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RiderSettings'
  }
</script>

<style lang="scss" scoped>
.rider-settings {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.main-content {
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  background: blue;
  display: grid;
  grid-template-areas:  "settings"
                        "profile"
                        "payments"
                        "ride-history"
                        "about"
                        "documents"
                        "sign-out";
  grid-template-rows: 80px 100px 75px 60px 60px 60px 1fr;
  grid-template-columns: 100%;

  .settings {
    grid-area: settings;
  }

  .profile {
    display: flex;
    flex-direction: row;
    grid-area: profile;
    background-color: red;
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

  .payments {
    grid-area: payments;
    background-color: green;

  }

  .ride-history {
    grid-area: ride-history;
    background-color: orange;
  }

  .about {
    grid-area: about;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: white;
    }
  }

  .documents {
    grid-area: documents;
    background-color: teal;  
  }

  .sign-out {
    grid-area: sign-out;
    background-color: purple;
  }

}
</style>