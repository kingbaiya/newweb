import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 根目录
    path: '/',
    name: 'index',
    component: () => import('../views/index/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
