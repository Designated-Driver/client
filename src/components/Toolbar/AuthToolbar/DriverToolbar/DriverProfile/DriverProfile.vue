
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
        <div class="prof-box">
          <div class="image">
            <img src="http://www.pvhc.net/img23/rhpjcvoyfukbbdaabcga.png">
          </div>
          <div class="text">
            <div class="name">
              <span>{{getDisplayName}}</span>
            </div>
            <div class="email">
              <span>{{getDisplayEmail}}</span>
            </div>
            <div class="phone" v-if="getDisplayPhoneNumber">
              <span>{{getDisplayPhoneNumber}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-vehicle">
        <div class="veh-box">
          <div class="Brand">
            <span>Toyota</span>
          </div>
          <div class="Model">
            <span>Corolla</span>
          </div>
          <div class="Year">
            <span>2018</span>
          </div>
           <div class="Seats">
            <span>5</span>
          </div>
        </div>
      </div>
     <div class="content-update">
        <div class="submit-button">Make Changes</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'RiderUser',
    computed: {
      ...mapGetters([
        'getDisplayName',
        'getDisplayEmail',
        'getDisplayPhoneNumber'
      ])
    }
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
    grid-template-areas:
      "header_prof"
      "profile_pg"
      "car_info"
      "changing";
    grid-template-rows: 5%, 30%, 30%, 20%;
    grid-row-gap: 5px;

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
      width: 100%;
      height: 100%;
      grid-area: profile_pg;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      grid-area: profile_pg;

      .prof-box {
        width: 80%;
        height: 85%;
        grid-template-areas:
          "photo" "username"
          "photo" "email"
          "photo" "number";
        grid-template-rows: 1fr, 1fr, 1fr;
        grid-template-columns: 15%, 1fr;
        grid-row-gap: 20px;
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
            background: white;
            // border: 1px solid gray;
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
    }

    .content-vehicle {
      width: 100%;
      height: 100%;
      grid-area: car_info;
      justify-content: center;
      align-items: center;
      display: flex;

      .veh-box {
        height: 65%;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        color: black;
        border-radius: 5px;
        grid-template-areas: "car-type" "car-model" "car-year" "car-seats";
        grid-template-columns: 25%, 25%, 25%, 25%;

        .Brand {
          width: 100%;
          height: 100%;
          grid-area: car-type;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .Model {
          grid-area: car-model;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .Year {
          grid-area: car-year;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .Seats {
          grid-area: car-seats;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .content-update {
      width: 80%;
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
