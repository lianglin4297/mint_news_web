<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-05 01:29:24
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 16:14:20
 -->
<template>
  <div class="wrapper">
    <div class="contain shop">
      <!-- <div class="gouwuche" v-for="(item,index) in shopInfo" :key="index">
        <h4>{{item.title}}</h4>
        <hr />
        <div class="info">
          <img :src="item.thumb_path" />
          <p>
            数量：{{item.cou}}
            价格：{{item.sell_price}}
          </p>
        </div>
      </div>-->
      <van-card
        :num="item.cou"
        :price="item.sell_price"
        desc="描述信息"
        :title="item.title"
        :thumb="item.thumb_path"
        v-for="(item,index) in shopInfo"
        :key="index"
      />
      <van-submit-bar
        disabled
        :price="cou*100"
        button-text="提交订单"
        tip="你的收货地址不支持同城送, 我们已为你推荐快递"
        tip-icon="info-o"
      />
    </div>
  </div>
</template>

<script>
import * as api from "@/api/api";
export default {
  data() {
    return {
      shopInfo: [
        {
          cou: "",
          title: "",
          thumb_path: "",
          sell_price: ""
        }
      ],
      cou: 0
    };
  },
  created() {
    this.getList(this.$route.params.id);
  },
  methods: {
    getList(id) {
      localStorage.setItem("id", id);
      this.http.get(api.GETSHOPCARLIST + id).then(res => {
        // console.log(res);
        this.shopInfo = res.data.message;
        // console.log(this.shopInfo.length);
        for (var i = 0; i < this.shopInfo.length; i++) {
          this.cou += this.shopInfo[i].sell_price
        }
        this.$indicator.close();
      });
    }
  }
};
</script>

<style scoped>
h4 {
  text-align: center;
  margin-top: 10px;
}
hr {
  margin: 10px 30px;
  color: aliceblue;
}
.shopping {
  background: #0099ff;
  border: none;
  box-shadow: 0 0 2px 2px #0099ff;
  padding: 6px;
  margin-top: 12px;
  color: white;
  margin-left: 6px;
}
.info {
  width: 300px;
  margin: 0 auto;
  background: skyblue;
  border-radius: 10px;
}
.gouwuche {
  padding-bottom: 20px;
  border-bottom: 1px solid #090909;
}
.gouwuche:last-of-type {
  border-bottom: none;
}
.info p {
  text-align: center;
  color: aliceblue;
}
</style>