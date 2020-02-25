/*
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 16:44:29
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-04 18:31:16
 */
const getters = {
	getTitle:(state)=>{
		return state.title
	},
	getBack:(state)=>{
		return state.isBack
	}
}

export default getters