import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'

// 导入Vant
import Vant from 'vant'
import 'vant/lib/index.css'

import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
// 全局注册组件
Vue.component('HmHeader', HmHeader)
Vue.component('HmLogo', HmLogo)
// 全局将van所有组件都导入
Vue.use(Vant)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
