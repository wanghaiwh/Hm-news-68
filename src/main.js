import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'
// 导入Vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入amfe-flexible库
import 'amfe-flexible'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
// 引入axios
import axios from 'axios'
// 将axios挂载到vue原型上
Vue.prototype.$axios = axios

// 给axios配置基准地址
axios.defaults.baseURL = 'http://localhost:3000'
// 全局注册组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)

// 全局将vantage所有组件都导入
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
