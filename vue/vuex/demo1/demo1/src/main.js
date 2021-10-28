import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex) //注册vuex
// use 调用vuex中的install方法
const store = new Vuex.Store({
  state: {
    //存贮的状态
    count: 0
  },
  mutations: {
    // addCount:function() {}
    addCount (state, payload) {
      state.count += 1
    }
  }
}) //实例化

new Vue({
  render: h => h(App),
  store //es6写法
}).$mount('#app')


