<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 14:52:50
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 16:25:47
 -->
<template>
  <div class="nav">
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in navList" :key="index">
        <router-link :to="item.url">
          <i :class="item.icon" />
          {{item.name}}
        </router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      navList: [
        {
          name: "新闻资讯",
          id: "新闻资讯",
          icon: "fa fa-newspaper-o",
          url: "/news"
        },
        {
          name: "图片列表",
          id: "图片列表",
          icon: "fa fa-file-image-o",
          url: "/images"
        },
        {
          name: "商品信息",
          id: "商品信息",
          icon: "fa fa-shopping-cart",
          url: "/shop"
        },
        {
          name: "个人中心",
          id: "个人中心",
          icon: "fa fa-tachometer",
          url: "/control"
        }
      ],
      active:0
    };
  }
};
</script>