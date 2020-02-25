/*
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 14:21:48
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-05 10:43:49
 */
const routes = [
	{
		path:'/',
		redirect:'/news'
	},
	{
		path:'/news',
		component:()=>import('@/components/news/news.vue'),
		meta:{
			name:'新闻资讯',
			back:false
		}
	},
	{
		path:'/images',
		component:()=>import('@/components/images/images.vue'),
		meta:{
			name:'图片列表',
			back:false
		}
	},
	{
		path:'/shop',
		component:()=>import('@/components/shop/shop.vue'),
		meta:{
			name:'商品信息',
			back:false
		}
	},
	{
		path:'/control',
		component:()=>import('@/components/control/control.vue'),
		meta:{
			name:'个人中心',
			back:false
		}
	},
	{
		path:'/newsDetail/:id',
		component:()=>import('@/components/news/newsDetail.vue'),
		meta:{
			name:'新闻详情',
			back:true
		}
	},
	{
		path:'/shopInfo/:id',
		component:()=>import('@/components/shop/shopInfo.vue'),
		meta:{
			name:'商品详情',
			back:true
		}
	},
	{
		path:'/shopping/:id',
		component:()=>import('@/components/shop/shopping.vue'),
		meta:{
			name:'购物车',
			back:true
		}
	}
]
export default routes