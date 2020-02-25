<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 14:23:28
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 16:37:25
 -->
<template>
  <div class="wrapper">
    <ul class="contain news">
       <van-notice-bar left-icon="volume-o" mode="closeable">
         人生就像一杯没有加糖的咖啡,喝起来是苦涩的回味起来却有久久不会退去的余香
       </van-notice-bar>
      <van-card
        :desc="item.zhaiyao"
        :title="item.title"
        :thumb="item.img_url"
        v-for="(item,index) in newList"
        :key="index"
        @click="getNewsList(item.id)"
      ></van-card>
      <div class="tip" v-if="tip">没有更多了...</div>
    </ul>
  </div>
</template>

<script>
import * as api from "../../api/api";
export default {
  name: "home",
  data() {
    return {
      newList: [],
      tip: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.http.get(api.GETLIST).then(res => {
        if (res.status == 200) {
          // console.log(res);
          this.newList = res.data.message;
          this.tip = true;
          this.$indicator.close();
        }
      });
    },
    getNewsList(id) {
      this.$router.push({
        path: "/newsDetail/" + id
      });
    }
  }
};
</script>
