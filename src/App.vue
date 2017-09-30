<template>
  <div id="app" v-on="{
    touchstart:ts,
    touchmove:tm,
    touchend:te
    }">
    <!-- <button @click="show=!show" v-red>toggle</button>
    <transition name="show" mode="in-out">
      <p v-if="show" key="show">show</p>
      <p v-if='!show' key="hide">hide</p>
    </transition>
    <button @click="random" v-ftext:title="'aa11123'">random</button>
    <button @click="add">add</button>
    <button @click="remove">remove</button><br>
    <transition-group name="random">
      <p class="random_item" v-for="(item,index) in nums" v-text="item" :key="item"></p>
    </transition-group>
    <top></top>
    <indexvideo v-for="(item,index) in videos" :video="item" :key="index"></indexvideo> -->
    <router-view></router-view>
    <router-view name="x"></router-view>
   <!-- {{ nextnum | double }} -->
  </div>
</template>

<script>
import yup from '~/yup'
import header from '@/commons/header'
import rem from'../static/rem'
import video from '@/commons/video'
import indexx from '~/index'
export default {
  name:'app',
  data(){
    return {
      nums:[1,2,3,4,5,6,7,8,9],
      nextnum:10,
      show:true,
      videos:[
        {
          type:"1",
          src: 'http://r1.ykimg.com/0515000059CC394EADC0B0BBB00CA7A8',
          title: '胡彦斌独自见郑爽家长 临场',
          time: '22:11',
          playTimes: '8.4',
          commentsTimes: '31'
        },
        {
          type:"2",
          src: 'http://r1.ykimg.com/0515000059CC394EADC0B0BBB00CA7A8',
          title: '胡彦斌独自见郑爽家长 临场',
          now:"更新至100",
          playTimes: '8.4',
          commentsTimes: '31'
        }
      ],
      point:{
        startX:'',
        endX:''
      }
    }
  },
  mounted(){
    rem.adapt(640,100)
  },
  components: {
    test:yup,
    top:header,
    indexvideo:video,
    indexx:indexx
  },
  methods:{
    hi(date){
      alert("aaaa")
    },
    ts(e){
      let finger = e.touches[0]
      this.point.startX = finger.clientX
      this.point.endX = finger.clientX
    },
    tm(e){
      let finger = e.touches[0]
      this.point.endX = finger.clientX
    },
    te(e){
      let distand = this.point.endX - this.point.startX
      if(distand < -30){
        this.$router.go(-1)
      }else if(distand > -30){
        this.$router.go(1)
      }
    },
    random(){
      this.nums.sort(() => Math.random() - 0.5)
    },
    add(){
      console.log(`
          hahah
          ${this.nextnum}
          <h1 class="ss">hh</h1>
        `)
      let random = Math.round(Math.random() * (this.nums.length-1))
      this.nums.splice(random, 0, this.nextnum++)
    },
    remove(){
      let random = Math.round(Math.random() * (this.nums.length-1))
      this.nums.splice(random, 1)
    }
  },
  directives:{
    red(e){
      e.style.color="red"
    },
    ftext(el,binding){
      el.innerText = binding.value
      el.setAttribute(binding.arg,binding.value)
    }
  },
  filters:{
    double:(val)=>{
      return `${this.a.data().nextnum}$`
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
html{
    font-size: calc( 100vw / 6.4);
    /*width: 1rem;*/
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.show-enter-active,.show-leave-active{
  transition: .5s;
}
.show-enter,.show-leave-to{
  transform: translateY(1px) rotate(360deg);
}
.random-move,.random-enter-active,.random-leave-active{
  transition: .5s;
}
.random-leave{
  position: absolute;
}
.random_item{
  display: inline-block;
  font-size: .14rem;
  padding: .05rem;
}
</style>
