<template>
  <div class="order-list-item-content">
    <div class="item-header-content">
      <div class="item-name">
        <span style="font-size: 1.6em; color: #474747">{{ name }}</span> <br>
        <span style="font-size: 1.2em; color: #6e6e6e">{{ englishName }}</span>
      </div>
      <div class="item-select-price">
        <div style="display: flex; flex-direction: row">
          <Button type="info" plain icon="el-icon-minus" circle style="font-size: 12px;" :disabled="buttonSubDisable" @click="buttonSubClick" />
          <div style="color: #6E6E6E; height: 38px; line-height: 38px; font-size: 22px; text-align: center; width: 40px">{{ number }}</div>
          <Button type="info" plain icon="el-icon-plus" circle style="font-size: 12px;" :disabled="buttonAddDisable" @click="buttonAddClick" />
        </div>
        <div style="float: right; font-size: 17px"> ￥{{ price }} </div>
      </div>
    </div>
    <hr />
    <div class="item-body-content">
      <div class="information-title">{{ informationTitle }}</div>
      <div class="information-context">{{ informationContext }}</div>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'
import './OrderListItem.css'

export default {
  props: {
    name: { default: '', type: String },
    englishName: { default: '', type: String },
    price: { default: 0.00, type: Number },
    informationTitle: { default: '', type: String },
    informationContext: { default: '', type: String },
    number: { default: 0, type: Number }
  },
  name: 'OrderListItem',
  components: { Button },
  data: () => ({}),
  computed: {
    buttonSubDisable: function () {
      return this.number < 0 || this.number === 0
    },
    buttonAddDisable: function () {
      return this.number < 0 || this.number > 98
    }
  },
  methods: {
    buttonSubClick () {
      this.$emit('clickSub')
    },
    buttonAddClick () {
      this.$emit('clickAdd')
    }
  }
}
</script>
