/*
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 16:44:22
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-04 18:31:35
 */
const mutations = {
	SET_TITLE(state,params){
		state.title = params
	},
	SET_BACK(state,params){
		state.isBack = params
	}
}

export default mutations