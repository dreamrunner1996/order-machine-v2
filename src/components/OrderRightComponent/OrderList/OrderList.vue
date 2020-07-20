<template>
  <div class="order-list-content">
    <div class="order-list-title">
      <div style="height: 40px; color: #4D4D4D; font-size: 1.6em; line-height: 40px">{{ orderData['name'] }}</div>
      <div style="height: 40px; color: #888888; font-size: 1.3em; line-height: 50px; margin-left: 10px">{{ orderData['englishName'] }}</div>
    </div>
    <Divider style="margin: 5px 0" />
    <div class="order-item-list">
      <OrderListItem v-for="(item, index) in orderData['list']"
                     :key="'order-item-'+index"
                     :name="item['name']"
                     :english-name="item['englishName']"
                     :price="item['price']"
                     :information-title="item['informationTitle']"
                     :information-context="item['informationContext']"
                     :number="item['number']"
                     @clickSub="ItemSub(item, index)"
                     @clickAdd="ItemAdd(item, index)"
      />
    </div>
  </div>
</template>

<script>
import OrderListItem from './OrderListItem/OrderListItem'
import { Divider } from 'element-ui'
import './OrderList.css'

export default {
  props: {
    orderData: {
      default: function () { return {} },
      type: Object
    }
  },
  name: 'OrderList',
  components: { OrderListItem, Divider },
  data: () => ({}),
  created () { console.log('created') },
  beforeDestroy () { console.log('beforeDestroy') },
  methods: {
    ItemSub (itemData, itemIndex) {
      console.log(itemIndex)
      this.$emit('orderItemSub')
    },
    ItemAdd (itemData, itemIndex) {
      console.log(itemIndex)
      this.$emit('orderItemAdd')
    }
  }
}
</script>
