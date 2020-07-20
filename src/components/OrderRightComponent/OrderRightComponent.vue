<template>
  <div class="order-right-component-content">
    <Menu style="border: 1px solid #eeeeee" :default-active="menuIndex" class="el-menu-demo" mode="horizontal" @select="MenuSelect">
      <MenuItem index="1">点餐</MenuItem>
      <MenuItem index="2">介绍</MenuItem>
      <MenuItem index="3">注意事项</MenuItem>
      <MenuItem index="4">如何使用</MenuItem>
      <MenuItem index="5">关于我们</MenuItem>
    </Menu>
    <div class="order-right-body">
      <OrderList v-for="(item, index) in orderListData"
                 :key="'order-list-' + index"
                 :order-data="item"
                 @orderItemSub="OrderItemSub(item, index)"
                 @orderItemAdd="OrderItemAdd(item, index)"
      />
    </div>
  </div>
</template>

<script>
import './OrderRightComponent.css'
import OrderList from './OrderList/OrderList'
import { Menu, MenuItem } from 'element-ui'

export default {
  name: 'OrderRightComponent',
  components: { Menu, MenuItem, OrderList },
  data: () => ({
    menuIndex: '1',
    orderListData: [
      {
        name: '西餐类',
        englishName: 'Western-Style Food',
        list: [
          { name: '牛排', englishName: 'Steak', informationTitle: '这是牛排', informationContext: '这是一块好吃的牛排', price: 18.50, number: 0 },
          { name: '猪排', englishName: 'Pork Chop', informationTitle: '这是猪排', informationContext: '这是一块好吃的猪排', price: 15.50, number: 0 },
          { name: '羊排', englishName: 'Lamb Chop', informationTitle: '这是羊排', informationContext: '这是一块好吃的羊排', price: 20.50, number: 0 },
          { name: '鸡排', englishName: 'Chicken Chop', informationTitle: '这是鸡排', informationContext: '这是一块好吃的鸡排', price: 13.50, number: 0 },
          { name: '雕排', englishName: 'Carve Chop', informationTitle: '这是雕排', informationContext: '这是一块好吃的雕排', price: 99.99, number: 0 }
        ]
      },
      {
        name: '中餐类',
        englishName: 'Chinese Food',
        list: [
          { name: '栖饭', englishName: 'Xi Rick', informationTitle: '栖栖饭', informationContext: '食栖啦你', price: 25.50, number: 0 },
          { name: '煲煲', englishName: 'Bao²', informationTitle: '煲栖饭', informationContext: '食煲食栖食雕雕', price: 35.00, number: 0 },
          { name: '宝宝雕水', englishName: 'Baby-Carve Water', informationTitle: '洗吖洗吖洗澡澡', informationContext: '煲煲雕水少不了', price: 20.50, number: 0 },
          { name: '霖栖', englishName: 'Lin-Xi', informationTitle: '唔知咩野', informationContext: '随便啦', price: 75.00, number: 0 },
          { name: '全家雕', englishName: 'Family Caver', informationTitle: '雕野', informationContext: '一堆雕雕', price: 100.00, number: 0 },
          { name: '全家煲', englishName: 'Family Bao', informationTitle: '煲野', informationContext: '煲栖', price: 99.99, number: 0 }
        ]
      }
    ]
  }),
  methods: {
    MenuSelect (key) { this.menuIndex = key },
    OrderItemSub (indexData, index) {
      console.log(indexData)
    },
    OrderItemAdd (indexData, index) {
      console.log(indexData)
    }
  }
}
</script>
