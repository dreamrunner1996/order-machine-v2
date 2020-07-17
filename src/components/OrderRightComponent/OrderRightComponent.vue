<template>
  <div class="order-right-component-content">
    <Menu style="border: 1px solid #eeeeee" :default-active="menuIndex" class="el-menu-demo" mode="horizontal" @select="MenuSelect">
      <MenuItem index="1">点餐</MenuItem>
      <MenuItem index="2">介绍</MenuItem>
      <MenuItem index="3">注意事项</MenuItem>
      <MenuItem index="4">如何使用</MenuItem>
      <MenuItem index="5">关于我们</MenuItem>
    </Menu>
  </div>
</template>

<script>
import './OrderRightComponent.css'
import { Menu, MenuItem } from 'element-ui'

export default {
  name: 'OrderRightComponent',
  components: { Menu, MenuItem },
  data: () => ({
    menuIndex: '1'
  }),
  methods: {
    MenuSelect (key, keyPath) {
      console.log(key + ' - ' + keyPath)
    }
  }
}
</script>
