import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueThumbs from '@/components/vue-thumbs'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-swiper',
      name: 'vueThumbs',
      component: vueThumbs
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
