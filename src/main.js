//es6编译(一定要写在最上边)
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import  './common/styles/index.less'
Vue.config.productionTip = false

//解决移动端300毫秒延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
