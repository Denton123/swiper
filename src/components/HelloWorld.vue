<template>
  <div>
    {{msg}}
    <swiper :sliderData="sliderData" :num="num"></swiper>
  </div>
</template>

<script>
import swiper  from "./test.vue";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 0,
      sliderData: [
         {
           pic: '../../static/nature1.jpg',
           id: 0
         },
         {
           pic: '../../static/nature2.jpg',
           id: 1
         },
         {
           pic: '../../static/nature3.jpg',
           id: 2
         },
         {
           pic: '../../static/nature4.jpg',
           id: 3
         },
         {
           pic: '../../static/nature5.jpg',
           id: 4
         },
         {
           pic: '../../static/nature6.jpg',
           id: 5
         },
         {
           pic: '../../static/nature7.jpg',
           id: 6
         },
         {
           pic: '../../static/nature8.jpg',
           id: 7
         },
         {
           pic: '../../static/nature9.jpg',
           id: 8
         },
         {
           pic: '../../static/nature10.jpg',
           id: 9
         },
        ]
    }
  },
  components: {
    swiper
  },
  mounted () {
    this.num = this.sliderData.length
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
