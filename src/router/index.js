import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 根目录
    path: '/',
    name: 'index',
    component: () => import('../views/index/index.vue')
  },
  { // 监控界面
    path: '/monitor',
    name: 'monitor',
    component: () => import('../views/monitor/monitor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
