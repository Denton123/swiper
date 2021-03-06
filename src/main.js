// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// import Swiper from 'swiper'; 
// import 'swiper/dist/css/swiper.min.css';
/* eslint-disable no-new */

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
