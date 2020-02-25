/*
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 14:39:13
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-05 11:17:08
 */
/**
 * @name: 获取图文资讯
 * @msg: 主要用来获取点击首页上的“新闻资讯”后进入到的图文列表页面的数据，大家在做的时候可以使用ajax请求这个地址获取json数据后展示到页面上
 * @param {type} get
 * @return: json
 */
export const GETLIST = '/api/getnewslist'
/**
 * @name: 获取图文资讯详情
 * @msg: 根据资讯newid,获取期详细描述信息
 * @param {type} get
 * @return: json
 */
export const GETNEWID = '/api/getnew'
/**
 * @name: 图片分类数据
 * @msg: 用于获取图片列表页面上面的分类信息获取
 * @param {type} get
 * @return: json
 */
export const GETIMAGE= '/api/getimgcategory'
/**
 * @name: 图片分类下详细数据
 * @msg: 用于获取点击首页上的“图片分享”后进入到的列表数据
 * @param {type} get
 * @return: json
 */
export const GETIMAGEID = '/api/getimages'
/**
 * @name: 图片分享详情中的缩略图数组
 * @msg: 用于获取图片详情页面上部的图片列表数据
 * @param {type} get
 * @return: json
 */
export const GETTHUMIMAGES = '/api/getthumimages'
/**
 * @name: 获取评论信息
 * @msg: 根据资讯id获取它的评论的分页信息
 * @param {type} get
 * artid: 资讯id，
	pageindex: 分页的页码，表示当前第几页
	传入url写法： /api/getcomments/43?pageindex=1
 * @return: json
 */
export const GETCOMMENT = '/api/getcomments'
/**
 * @name: 提交评论信息
 * @msg: 给某条资讯进行评论
 * @param {type} get
 * artid: 资讯id，
	content: 评论的内容
	传入url写法：/api/postcomment/43
	请求报文体Body格式:
	content=评论内容
 * @return: json
 */
export const POSTCOMMENT = '/api/postcomment'
/**
 * @name: 获取商品列表数据
 * @msg: 获取商品列表展示页面中的所有数据
 * @param {type} get
 * /api/getgoods?pageindex=number
 * @return: json
 */
export const GETGOODS = '/api/getgoods'
/**
 * @param {type} get
 * /api/goods/getdesc/:id
 * @return: json
 */
export const GETDESC = '/api/goods/getdesc/'

// /api/goods/getshopcarlist/:ids
export const GETSHOPCARLIST = '/api/goods/getshopcarlist/'
// /api/goods/getinfo/
export const GETSHOPINFO = '/api/goods/getinfo/'