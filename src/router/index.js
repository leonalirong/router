import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/page1',
      component: () => import('../views/Page1.vue')
    },
    {
      path: '/page2',
      component: () => import('../views/Page2.vue')
    },
    {
      path: '*',
      redirect: '/page1'
    }
  ]
})
