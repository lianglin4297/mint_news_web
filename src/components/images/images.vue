<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 16:11:10
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 17:13:34
 -->
<template>
  <div class="wrapper">
    <div class="contain images">
      <van-tabs>
        <!-- <van-tab v-for="(item,index) in imageList" :key="index" :title="item.title" >
          <div class="image" v-for="(item,index) in imageId" :key="index">
            <div class="title">{{item.title}}</div>
            <img :src="item.img_url" />
            <span class="zhaiyao">{{item.zhaiyao}}</span>
          </div>
        </van-tab>-->
        <van-tab v-for="(item,index) in imageList" :key="index">
          <div slot="title" @click="getImageId(item.id)">{{item.title}}</div>
          <div class="image">
            <van-image fit="contain" round v-for="(image,index) in imageId" :key="index" :src="image.img_url">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
          <p v-if="tip" class="tip">没有更多了...</p>
        </van-tab>
      </van-tabs>
      <!-- <mt-navbar v-model="selected">
        <mt-tab-item v-for="(item,index) in imageList" :key="index" :id="item.id">
          <span @click="getImageId(item.id)">{{item.title}}</span>
        </mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item v-for="(item,index) in imageId" :key="index" :id="selected">
          <div class="image" @click="getImageInfo(item.id)">
            <div class="title">{{item.title}}</div>
            <img :src="item.img_url" />
            <span class="zhaiyao">{{item.zhaiyao}}</span>
          </div>
        </mt-tab-container-item>
        <p v-if="tip" class="tip">没有更多了...</p>
      </mt-tab-container>-->
    </div>
  </div>
</template>

<script>
import * as api from "@/api/api";
export default {
  name: "",
  data() {
    return {
      imageList: [],
      imageId: [],
      selected: 14,
      tip: true
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.http.get(api.GETIMAGE).then(res => {
        this.imageList = res.data.message;
        this.$indicator.close();
      });
    },
    getImageId(id) {
      this.$indicator.open("加载中...");
      this.http.get(api.GETIMAGEID + "/" + id).then(res => {
        if (res.status == 200) {
          console.log(res);
          this.imageId = res.data.message;
          if (res.data.message.length != 0) {
            this.tip = false;
          } else {
            this.tip = true;
          }
        }
        this.$indicator.close();
      });
    },
    getImageInfo(id) {
      this.http.get(api.GETTHUMIMAGES + "/" + id).then(res => {
        if (res.status == 200) {
          // console.log(res)
          // 点击获取缩略图组
        }
      });
    }
  }
};
</script>
<style scoped>
.image {
  width: 100%;
  height: 240px;
  position: relative;
}
.title {
  text-align: center;
}
.zhaiyao {
  position: absolute;
  bottom: 0px;
  left: 0;
  padding: 0 10px;
  background: rgba(0, 22, 222, 0.2);
  color: rgb(255, 255, 255);
  padding: 10px;
  height: 10px;
}
>>> .van-tabs__line {
  background-color: #0099ff !important;
}
.image .van-image,
img {
  width: 100%;
  height: 100%;
}
.image .van-image {
  margin: 10px 0;
}
.image .van-image:last-of-type {
  margin-bottom: 60px;
}
.image:hover .zhaiyao {
  height: auto;
}
.tip {
  width: 100%;
  text-align: center;
}
</style>