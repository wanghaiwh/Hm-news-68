import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import HmNavItem from '../components/HmNavItem.vue'

Vue.use(VueRouter)
// 全局将push异常处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // 指定每个路由规则都可以提供一个name属性
  { path: '/login', component: Login, name: 'login' },
  { path: '/Register', component: Register, name: 'register' },
  { path: '/User', component: User, name: 'user' },
  { path: '/HmNavItem', component: HmNavItem, name: 'hmnavitem' }
]

const router = new VueRouter({ routes })

// 配置全局的导航守卫
// to: 到哪去
// from: 从哪来
// next:函数，代表是否放行
router.beforeEach(function(to, from, next) {
  // 只要路由发生跳转,跳转之前这个函数就要被执行
  // console.log('前置导航守卫执行')
  // console.log('to', to)
  // console.log('from', from)
  // next()
  const token = localStorage.getItem('token')
  if (to.name !== 'user' || token) {
    next()
  } else {
    router.push('/login')
  }
})
// router.afterEach(function(to, from) {
//   console.log('后置导航守卫执行')
// })
export default router
