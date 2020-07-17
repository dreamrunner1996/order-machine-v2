<template>
  <div id="app">
    <Main @beginOrder="mainShow = false" v-if="mainShow" />
    <Order v-else :space-percent="parseInt(((100 / spaceTimeOut) * spaceTime).toFixed(0))"></Order>
  </div>
</template>

<script>
import { Notification } from 'element-ui'
import Main from './views/Main/Main'
import Order from './views/Order/Order'
import './App.css'

let _idleSecondsTimer = null

export default {
  components: { Main, Order },
  name: 'App',
  data: () => ({
    mainShow: true,
    spaceTime: 0,
    spaceTimeOut: 60
  }),
  watch: {
    mainShow: function () {
      this.SpaceTime()
    },
    spaceTime: function (newVal) {
      if (newVal === (this.spaceTimeOut - 15)) {
        Notification({
          title: '空闲提示',
          dangerouslyUseHTMLString: true,
          message: '<span style="font-weight: bold; color: #444444">检测到你长时间没有活动, 在 <span style="color: coral">15秒</span> 后会自动返回主页面</span>',
          duration: 15000
        })
      }
    }
  },
  methods: {
    // 空置时间 30秒 不动就返回主页
    SpaceTime () {
      if (_idleSecondsTimer) { window.clearInterval(_idleSecondsTimer) }
      const _this = this
      _idleSecondsTimer = null

      document.onclick = () => { _this.spaceTime = 0 }
      document.onmousemove = () => { _this.spaceTime = 0 }
      document.onkeypress = () => { _this.spaceTime = 0 }
      document.ontouchstart = () => { _this.spaceTime = 0 }
      document.ontouchmove = () => { _this.spaceTime = 0 }
      document.ontouchend = () => { _this.spaceTime = 0 }

      if (!_this.mainShow) {
        _idleSecondsTimer = window.setInterval(CheckIdleTime, 1000)
      }

      function CheckIdleTime () {
        _this.spaceTime++
        if (_this.spaceTime >= _this.spaceTimeOut) {
          _this.mainShow = true
          _this.spaceTime = 0
          window.clearInterval(_idleSecondsTimer)
          _idleSecondsTimer = null
        }
      }
    }
  }
}
</script>
