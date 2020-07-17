<template>
  <div class="main-content" :style="styleList.mainStyleStartOrder" @click="BeginOrder" ref="main">
    <div class="main-head-content">
      <div class="title-frame">
        Welcome
      </div>
    </div>
    <div class="main-body-content">
      <div class="main-body-left-content">
        <div class="title-frame">
          <span style="font-size: 1.3em">欢迎来到点餐系统</span> <br>
          <span style="font-size: .9em">在这里，你将体会到不一样的流程体验</span>
        </div>
        <div class="title-second-frame">
          <span style="font-size: 1.4em">Welcome to Ordering System</span> <br>
          <span style="font-size: .8em">In here, you will experience a different experience flow than usual</span>
        </div>
      </div>
      <div class="main-body-right-content">
        <Carousel :interval="4000" indicator-position="none" direction="horizontal">
          <CarouselItem v-for="(item, index) in carouselData.urlList" :key="index">
            <img width="100%" height="100%" :src="item" alt="#">
          </CarouselItem>
        </Carousel>
      </div>
    </div>
    <div class="main-footer-content">
      <div class="title-frame">
        <span style="opacity: 0.2; animation: lt_gt_flash 5s linear 500ms infinite">&gt;</span>
        <span style="opacity: 0.2; animation: lt_gt_flash 5s linear 1000ms infinite">&gt;</span>
        <span style="opacity: 0.2; animation: lt_gt_flash 5s linear 1500ms infinite">&gt;</span>
        点击空白处开始点餐
        <span style="opacity: 0.2; animation: lt_gt_flash 5s linear 1500ms infinite">&lt;</span>
        <span style="opacity: 0.2; animation: lt_gt_flash 5s linear 1000ms infinite">&lt;</span>
        <span style="opacity: 0.2; animation: lt_gt_flash 5s linear 500ms infinite">&lt;</span>
      </div>
      <div class="title-second-frame">Click on the blank space to start ordering</div>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui'
import './Main.css'

export default {
  name: 'Main',
  components: { Carousel, CarouselItem },
  data: () => ({
    styleList: {
      mainStyleStartOrder: { animation: 'end_order 500ms ease 1' }
    },
    carouselData: {
      urlList: [
        'http://localhost:80/order/1.jpg',
        'http://localhost:80/order/2.jpg',
        'http://localhost:80/order/3.jpg',
        'http://localhost:80/order/4.jpg'
      ]
    }
  }),
  created () {
    console.log('main created')
  },
  methods: {
    BeginOrder () {
      const _this = this
      setTimeout(() => { _this.$emit('beginOrder') }, 500)
      _this.styleList.mainStyleStartOrder = { animation: 'start_order 500ms ease 1' }
    }
  },
  destroyed () {
    console.log('main destroyed')
  }
}
</script>
