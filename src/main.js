import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'
// 导入Vant
import Vant, { Toast } from 'vant'
import 'vant/lib/index.css'
// 导入amfe-flexible库
import 'amfe-flexible'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmNavItem from './components/HmNavItem.vue'
// 引入axios
import axios from 'axios'
import moment from 'moment'

// 将axios挂载到vue原型上
Vue.prototype.$axios = axios
// 给axios配置基准地址
axios.defaults.baseURL = 'http://localhost:3000'
// 给axios添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么 config请求的配置信息
  console.log('拦截了请求', config)
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})
// axios添加响应拦截器
axios.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  // console.log('拦截了响应', response)
  const { statusCode, message } = response.data
  if (statusCode === 401 && message === '用户信息验证失败') {
    // console.log('token失效')
    // 跳转到登录页面
    router.push('/login')
    // 清除掉失效的信息
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    // 弹出框 提示用户验证失败
    Toast.fail('登录信息失效')
  }
  return response
})

// 定义全局过滤器
Vue.filter('time', input => {
  return moment(input).format('YYYY-MM-DD')
})
// 全局注册组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-navitem', HmNavItem)
// 全局将vantage所有组件都导入
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
