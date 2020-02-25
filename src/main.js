/*
 * @Description:
 * @version:
 * @Author: Lianglin
 * @Date: 2019-09-03 17:56:06
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 15:49:25
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import http from './utils/https'
import './assets/css/common.css'
import './assets/css/font-awesome.min.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import Vuex from 'vuex'
import store from './store/index'
import Moment from 'moment'
//定义全局变量
Vue.prototype.http=http;
Vue.use(MintUI)
Vue.use(Vant);
Vue.filter('formatDate',function(value){
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
