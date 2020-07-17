<template>
  <div class="order-page-content">
    <Row>
      <Col :span="8">
        <OrderLeftComponent :space-percent="spacePercent" />
      </Col>
      <Col :span="16">
        <OrderRightComponent />
      </Col>
    </Row>
  </div>
</template>

<script>
import OrderLeftComponent from '../../components/OrderLeftComponent/OrderLeftComponent'
import OrderRightComponent from '../../components/OrderRightComponent/OrderRightComponent'
import './Order.css'
import { Col, Row } from 'element-ui'

export default {
  props: {
    spacePercent: {
      default: 0,
      type: Number
    }
  },
  components: { OrderLeftComponent, OrderRightComponent, Col, Row },
  name: 'Order',
  data: () => ({})
}
</script>
