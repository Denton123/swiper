<template>
<div>
    <div  style="height: 500px">
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1"><img width="100%" height="100%" src="../assets/1.jpg" alt=""></swiper-slide> 
        <swiper-slide class="slide-2"><img width="100%" height="100%" src="../assets/2.jpg" alt=""></swiper-slide> 
        <swiper-slide class="slide-3"><img width="100%" height="100%" src="../assets/3.jpg" alt=""></swiper-slide> 
        <swiper-slide class="slide-4"><img width="100%" height="100%" src="../assets/4.jpg" alt=""></swiper-slide> 
        <swiper-slide class="slide-5"><img width="100%" height="100%" src="../assets/5.jpg" alt=""></swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"><img src="../assets/1.jpg" width="100%" height="100%" alt=""></swiper-slide>
        <swiper-slide class="slide-2"><img src="../assets/2.jpg" width="100%" height="100%" alt=""></swiper-slide>
        <swiper-slide class="slide-3"><img src="../assets/3.jpg" width="100%" height="100%" alt=""></swiper-slide>
        <swiper-slide class="slide-4"><img src="../assets/4.jpg" width="100%" height="100%" alt=""></swiper-slide>
        <swiper-slide class="slide-5"><img src="../assets/5.jpg" width="100%" height="100%" alt=""></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'vueThumbs',
  data () {
    return {
      swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 9,
          touchRatio: 0.2,
          // loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
    }
  },
  mounted () {
    this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    /*&.slide-1 {
      background-image:url('../assets/1jpg');
    }
    &.slide-2 {
      background-image:url('../assets/2jpg');
    }
    &.slide-3 {
      background-image:url('../assets/3jpg');
    }
    &.slide-4 {
      background-image:url('../assets/4jpg');
    }
    &.slide-5 {
      background-image:url('../assets/5.jpg');
    }*/
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>
