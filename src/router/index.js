import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main/Main'

Vue.use(VueRouter)

const routes = [
  { path: '/', alias: ['/index', '/main'], name: 'Main', component: Main }
]

export default new VueRouter({
  routes
})
