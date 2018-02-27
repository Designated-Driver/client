<template>
  <div class="about">
    <swiper :options="swiperOption" class="swiper" ref="mySwiper" @slideChange="slideChange">
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">
          <img src="@/assets/about_1.png" alt="">
        </div>
        <div class="swiper-text">
          Welcome to Designated Driver! We’re thrilled that you could join us to ensure that you get home safe and sound every time you hit the town. 
          Here’s a quick informational guide to get you started. 
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">
          <img src="@/assets/about_2.png" alt="Image is missing">
        </div>
        <div class="swiper-text">
          How DDS Works: Take this situation for example. You’re out in town and you’ve had a drink too many! We’ve all been there. 
          You don’t want to leave your car in town overnight, so you Request a Ride using DDS!
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">
          <img src="@/assets/about_3.png" alt="Image is missing">
        </div>
        <div class="swiper-text">
          DDS will bring two drivers to your current location. One will drive you and your car home, and the other will drive right behind to ensure that you get home safe and sound!
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">
          <img src="@/assets/about_4.png" alt="Image is missing">
        </div>
        <div class="swiper-text">
          Look at that, you’re all set! When safety is our top concern, you can rest assured that you’re in safe hands. Welcome to Designated Driver Service. 
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next" v-if="!showCloseTour" slot="button-next"></div>
      <div class="show-close-tour" slot="button-prev" @click="closeButton" v-else>Done</div>
    </swiper>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        showCloseTour: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next'
          }
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      ...mapActions([
        'showAboutPage'
      ]),
      slideChange: function () {
        this.swiper.isEnd ? (this.showCloseTour = true) : (this.showCloseTour = false)
      },
      closeButton: function () {
        this.showAboutPage(false)
      }
    },
    name: 'About'
  }
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  

  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      height: 100%;
      width: 100%;

      .swiper-img, .swiper-text {
        height: 50%;
        width: 100%;
      }

      .swiper-img {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #007aff;
        
        img {
          max-height: 60%;
          max-width: 60%;
        }
      }

      .swiper-text {
        display: flex;
        background: #ececec;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }

    .swiper-button-next, .show-close-tour {
      position: absolute;
      margin: 0;
      top: 90%;
    }

    .show-close-tour {
      z-index: 100;
      height: 44px;
      color: #007aff;
      top: 90%;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>