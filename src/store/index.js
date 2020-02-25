/*
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 16:44:04
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-04 17:34:10
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
 Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store