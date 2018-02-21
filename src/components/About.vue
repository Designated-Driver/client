<template>
  <div class="about">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">
          <img src="@/assets/imgs/cactus.png" alt="">
        </div>
        <div class="swiper-text">
          Welcome to Designated Driver! We’re thrilled that you could join us to ensure that you get home safe and sound every time you hit the town. 
          Here’s a quick informational guide to get you started. 
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">
          <img src="" alt="Image is missing">
        </div>
        <div class="swiper-text">
          How DDS Works: Take this situation for example. You’re out in town and you’ve had a drink too many! We’ve all been there. 
          You don’t want to leave your car in town overnight, so you Request a Ride using DDS!
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">This is the image</div>
        <div class="swiper-text">
          DDS will bring two drivers to your current location. One will drive you and your car home, and the other will drive right behind to ensure that you get home safe and sound!
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <div class="swiper-img">This is the image</div>
        <div class="swiper-text">
          Look at that, you’re all set! When safety is our top concern, you can rest assured that you’re in safe hands. Welcome to Designated Driver Service. 
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
    name: 'About'
  }
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  width: 100%;

  .swiper {
    height: 100%;
    width: 100%;
    position: relative;

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
        
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }

      .swiper-text {
        background: red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }

    .swiper-button-next {
      position: absolute;
      height: 95vh;  
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>