<template>
  <div class="order-left-component-content">
    <div class="top">
      <div style="color: #FFFFFF; font-size: 1.4em">Welcome</div>
      <div style="text-align: right">
        <div style="color: #FFFFFF; font-size: 1.1em">{{showDate}}</div>
        <div style="color: #FFFFFF; font-size: 2.6em">{{showTime}}</div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <div style="color: #FFFFFF; font-size: 1.7em">点餐系统</div>
        <div style="color: #FFFFFF; font-size: 1.7em">给予您不一样的体验</div>
        <div style="color: #FFFFFF; font-size: 1.5em; margin-top: 40px">Please enjoy this time</div>
      </div>
      <div style="float: right; margin-top: -40px;">
        <TimeSpaceLoading :percent-num="spacePercent" />
      </div>
    </div>
  </div>
</template>

<script>
import './OrderLeftContent.css'
import TimeSpaceLoading from '../TimeSpaceLoading/TimeSpaceLoading'

// eslint-disable-next-line no-unused-vars
let TimeInterval = null

export default {
  name: 'OrderLeftComponent',
  components: { TimeSpaceLoading },
  props: {
    spacePercent: {
      default: 0,
      type: Number
    }
  },
  data: () => ({
    year: '2000',
    month: '01',
    date: '01',
    day: 'Sun',
    hour: '00',
    minute: '00',
    second: '00'
  }),
  computed: {
    showDate: function () { return `${this.year}/${this.month}/${this.date} - ${this.day}` },
    showTime: function () { return `${this.hour}:${this.minute}:${this.second}` }
  },
  mounted () {
    const _this = this
    _this.UpdateTime()
    TimeInterval = window.setInterval(_this.UpdateTime, 1000)
  },
  methods: {
    UpdateTime () {
      const myDate = new Date()
      this.year = myDate.getFullYear()
      this.month = myDate.getMonth() < 10 ? '0' + myDate.getMonth().toString() : myDate.getMonth()
      this.date = myDate.getDate() < 10 ? '0' + myDate.getDate().toString() : myDate.getDate()
      const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
      this.day = dayArray[myDate.getDay()]
      this.hour = myDate.getHours() < 10 ? '0' + myDate.getHours().toString() : myDate.getHours()
      this.minute = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes().toString() : myDate.getMinutes()
      this.second = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds().toString() : myDate.getSeconds()
    }
  },
  beforeDestroy () { if (TimeInterval) { window.clearInterval(TimeInterval) } }
}
</script>
