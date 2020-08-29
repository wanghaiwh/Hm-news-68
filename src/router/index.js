import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import HmNavItem from '../components/HmNavItem.vue'

Vue.use(VueRouter)

const routes = [
  // 指定每个路由规则都可以提供一个name属性
  { path: '/login', component: Login, name: 'login' },
  { path: '/Register', component: Register, name: 'register' },
  { path: '/User', component: User, name: 'user' },
  { path: '/HmNavItem', component: HmNavItem, name: 'hmnavitem' }
]

const router = new VueRouter({ routes })
export default router
