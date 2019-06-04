import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        name: 'page2',
        component: Page2
      }
    ]
  },
  {
    path: '/detail/:id/:name',
    name: 'detail',
    component: Detail
  },
  {
    path: 'login',
    name: 'login',
    component: Login
  }

]

// 实例化路由对象
const router = new VueRouter({
  routes
})

export default router
