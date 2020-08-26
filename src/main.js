import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入通用的样式
import './styles/base.less'
// 导入字体样式
import './styles/iconfont.css'

// 导入Vant
// import Vant from 'vant'
import { Button } from 'vant'
// import 'vant/lib/index.css'
// console.log(Vant)
// 全局将vantage所有组件都导入
// Vue.use(Vant)
Vue.use(Button)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
