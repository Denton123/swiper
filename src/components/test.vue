<template>
<div class="wrap">
		 <div class="swiper-container gallery-top">
    <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in sliderData" :key="item.id">
            	<img :src="item.pic" alt="">
            </div>
            <!-- <div class="swiper-slide"><img src="../assets/nature2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature3.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature4.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature5.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature6.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature7.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature8.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature9.jpg" alt=""></div> -->
            <!-- <div class="swiper-slide"><img src="../assets/nature10.jpg" alt=""></div> -->
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next swiper-button-white next"></div>
    <div class="swiper-button-prev swiper-button-white prev"></div>
  </div>
  <div class="swiper-container gallery-thumbs">
    <div class="swiper-wrapper">
    		<div class="swiper-slide" v-for="(item, index) in sliderData" :key="item.id">
            	<img :src="item.pic" alt="">
            </div>
           	<!-- <div class="swiper-slide"><img src="../assets/nature1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature3.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature4.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature5.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature6.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature7.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature8.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/nature9.jpg" alt=""></div> -->
            <!-- <div class="swiper-slide"><img src="../assets/nature10.jpg" alt=""></div> -->
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
	export default {
		name: 'test',
		data () {
			return {
				// sliderData: [
				// 	{
				// 		pic: '../../static/nature1.jpg',
				// 		id: 0
				// 	},
				// 	{
				// 		pic: '../../static/nature2.jpg',
				// 		id: 1
				// 	},
				// 	{
				// 		pic: '../../static/nature3.jpg',
				// 		id: 2
				// 	},
				// 	{
				// 		pic: '../../static/nature4.jpg',
				// 		id: 3
				// 	},
				// 	{
				// 		pic: '../../static/nature5.jpg',
				// 		id: 4
				// 	},
				// 	{
				// 		pic: '../../static/nature6.jpg',
				// 		id: 5
				// 	},
				// 	{
				// 		pic: '../../static/nature7.jpg',
				// 		id: 6
				// 	},
				// 	{
				// 		pic: '../../static/nature8.jpg',
				// 		id: 7
				// 	},
				// 	{
				// 		pic: '../../static/nature9.jpg',
				// 		id: 8
				// 	},
				// 	{
				// 		pic: '../../static/nature10.jpg',
				// 		id: 9
				// 	},
				// ],
				num: ''
			}
		},
		props: {
			sliderData: [],
			num: 0,
		},
		mounted () {
			var galleryTop = new Swiper('.gallery-top', {
		      spaceBetween: 10,
		      loop:true,
		      loopedSlides: 9, //looped slides should be the same
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });
		    // let length = this.prop.sliderData.length
		    let length = 9
		    // this.$nextTick(() => {
		    // 	length = this.props.sliderData.length
		    // })
		    var galleryThumbs = new Swiper('.gallery-thumbs', {
		      spaceBetween: 10,
		      slidesPerView: length,
		      touchRatio: 0.2,
		      loop: true,
		      loopedSlides: 9, //looped slides should be the same
		      slideToClickedSlide: true,
		      centeredSlides : true, // 居中
		    });
		    galleryTop.controller.control = galleryThumbs;
		    galleryThumbs.controller.control = galleryTop;
		},
		watch: {
			sliderData: function(newVal, oldVal) {
				console.log(newVal)
				console.log(oldVal)
			}
		}
	}
</script>
<style>
/*@import '../../static/swiper.min.css';*/
.wrap {
	width: 700px;
	height: 600px;
}
	.swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
      height: 80%;
      width: 100%;
    }
    .gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
    img{
    	width: 100%;
    	height: 100%;
    	cursor: pointer;
    }
    .prev {
    	position: absolute;
    }
</style>