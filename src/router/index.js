import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Index from '../views/Index/index.vue'
import Detail from '../views/Detail/index.vue'
import Home from '../views/Index/home.vue'
import About from '../views/Index/about.vue'
import Center from '../views/Index/center.vue'
import Card from '../views/Card/index.vue'
import Money from '../views/Money/index.vue'
import Login from '../views/Login/index.vue'

NProgress.configure({ showSpinner: false })// 将进度条后的圈圈关闭
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      name: 'detail',
      path: '/detail/:id',
      component: Detail,
      beforeEnter: (to, from, next) => {
        console.log('详情页独享')
        next()
      },
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/card',
      component: Card,
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to, from, next) => {
      //   if (window.localStorage.getItem('userInfo')) {
      //     next()
      //   } else {
      //     console.log(to)
      //     next({
      //       path: '/login',
      //       query: {
      //         redirect: to.fullPath
      //       }
      //     })
      //   }
      // }
    },
    {
      path: '/money',
      component: Money,
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to, from, next) => {
      //   if (window.localStorage.getItem('userInfo')) {
      //     next()
      //   } else {
      //     console.log(to)
      //     next({
      //       path: '/login',
      //       query: {
      //         redirect: to.fullPath
      //       }
      //     })
      //   }
      // }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()

  // 判断是否有登录
  //   if (to.path === '/card' || to.path === '/money') {
  //     if (window.localStorage.getItem('userInfo')) {
  //       next()
  //     } else {
  //       console.log(to)
  //       next({
  //         path: '/login',
  //         query: {
  //           redirect: to.fullPath
  //         }
  //       })
  //     }
  //   } else {
  //     next({})
  //   }
  // })

  if (to.meta.requireLogin) {
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      console.log(to)
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next({})
  }
})

router.afterEach((to, from) => {
  NProgress.done()
  console.log('后置')
})
export default router
