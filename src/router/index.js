/*
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-03 17:56:06
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-04 23:52:46
 */
import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router =  new Router({
  routes
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.name
  Vue.$indicator.open('加载中...');
  store.commit('SET_TITLE',to.meta.name)
  store.commit('SET_BACK',to.meta.back)
  next()
})
export default router