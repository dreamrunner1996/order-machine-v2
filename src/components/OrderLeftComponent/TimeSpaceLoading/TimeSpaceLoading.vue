<template>
  <div class="time-space-content">
    <canvas id="time-space-canvas" ref="timeSpaceCanvas" width="40" height="40" />
  </div>
</template>

<script>
export default {
  props: {
    percentNum: {
      default: 0,
      type: Number
    }
  },
  name: 'TimeSpaceLoading',
  data: () => ({}),
  watch: {
    percentNum: function (newVal) {
      this.CanvasCreate(newVal)
    }
  },
  methods: {
    CanvasCreate (percent) {
      const canvas = this.$refs.timeSpaceCanvas
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, 40, 40)
      ctx.fillStyle = '#FFFFFF'
      ctx.beginPath()
      ctx.moveTo(20, 20)
      ctx.lineTo(20, 0)
      ctx.arc(20, 20, 20, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2) / 100 * percent, true)
      ctx.lineTo(20, 20)
      ctx.closePath()
      ctx.fill()
    }
  }
}
</script>

<style scoped>

</style>
