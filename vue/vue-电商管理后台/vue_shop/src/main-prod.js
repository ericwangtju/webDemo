/*
 * @Author: your name
 * @Date: 2021-02-16 00:27:54
 * @LastEditTime: 2021-02-16 23:24:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-电商管理后台/vue_shop/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'
import VueQuillEditor from 'vue-quill-editor'

import NProgress from 'nprogress'

Vue.use(VueQuillEditor /* { default global options } */)
/// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.19527/api/private/v1/'
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config // 必须加上return
})
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
// axios.defaults.baseURL = 'https://yapi.u-inn.cn/mock/24/ebay/'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component('tree-table', TreeTable)

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
