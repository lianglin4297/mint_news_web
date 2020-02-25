<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 16:11:01
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 16:32:29
 -->
<template>
  <div class="wrapper">
    <div class="contain shop">
      <ul
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <van-card
          tag="热卖"
          :price="item.sell_price"
          :desc="item.zhaiyao"
          :title="item.title"
          :thumb="item.img_url"
          :origin-price="item.market_price"
          v-for="(item,index) in shopList"
          :key="index"
        >
          <div slot="footer">
            <van-button size="mini" @click="getShopInfo(item.id)">查看详情</van-button>
            <van-button size="mini" @click.stop="goshopping(item.id)">加入购物车</van-button>
          </div>
        </van-card>
      </ul>
      <p v-if="tip" class="tip">没有更多了...</p>
      <mt-popup v-model="popupVisible" position="bottom">
        <h4>{{shopInfo[0].title}}</h4>
        <hr />
        <p>商品编号：{{shopInfo[0].goods_no}}</p>
        <div class="info">
          <span class="market_price">原价：{{shopInfo[0].market_price}}</span>
          <span class="sell_price">现价：{{shopInfo[0].sell_price}}</span>
          <span class="stock_quantity">库存：{{shopInfo[0].stock_quantity}}</span>
        </div>
        <div class="button">
          <!-- <button class="sell">立即购买</button> -->
          <button class="reduce" @click="reduce()">-</button>
          <input type="text" v-model="num" disabled />
          <button class="add" @click="add()">+</button>
          <button class="shopping" @click="goshopping(shopInfo[0].id)">加入购物车</button>
        </div>
      </mt-popup>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/api";
export default {
  name: "",
  data() {
    return {
      number: 0,
      num: 1,
      shopList: [],
      shopInfo: [
        {
          title: "",
          goods_no: "",
          stock_quantity: "",
          market_price: "",
          sell_price: ""
        }
      ],
      tip: false,
      loading: false,
      popupVisible: false
    };
  },
  methods: {
    getList(number) {
      this.loading = false;
      this.http.get(api.GETGOODS + "?pageindex=" + number).then(res => {
        this.shopList = this.shopList.concat(res.data.message);
        if (res.data.message.length == 0) {
          this.tip = true;
          this.loading = false;
        }
        this.$indicator.close();
      });
    },
    loadMore() {
      this.loading = true;
      this.$indicator.open("加载中");
      setTimeout(() => {
        this.number++;
        this.getList(this.number);
        this.loading = false;
      }, 500);
    },
    getShopInfo(id) {
      this.$router.push({
        path: "/shopInfo/" + id
      });
    },
    getshopcarlist(id) {
      this.popupVisible = true;
      this.http.get(api.GETSHOPINFO + id).then(res => {
        // console.log(res);
        this.shopInfo = res.data.message;
        this.$indicator.close();
      });
    },
    reduce() {
      this.$toast({
        message: "只能买一个哦",
        position: "middle",
        duration: 2000
      });
    },
    add() {
      this.$toast({
        message: "只能买一个哦",
        position: "middle",
        duration: 2000
      });
    },
    goshopping(id) {
      var lastId = localStorage.getItem("id");
      if (lastId) {
        var nextId = lastId + "," + id;
      } else {
        var nextId = id;
      }

      this.$router.push({
        path: "/shopping/" + nextId
      });
    }
  }
};
</script>
<style scoped>
.shopList {
  height: 240px;
  margin: 20px 0;
  position: relative;
  border-bottom: 1px solid darkblue;
  padding: 10px 0;
}
.shopList:last-of-type {
  border: none;
}
.shopList img {
  height: 80%;
  width: 45%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
}
.shopList .info {
  height: 100%;
  width: 50%;
  position: absolute;
  top: 80px;
  right: 0px;
  text-align: center;
}
.shopList .title {
  width: 100%;
  position: absolute;
  bottom: 6px;
  text-align: center;
  font-size: 14px;
}
.market_price {
  text-decoration: line-through;
  color: gray;
}
.stock_quantity {
  color: red;
}
.mint-popup button {
  background: #0099ff;
  border: none;
  box-shadow: 0 0 2px 2px skyblue;
  padding: 6px;
  margin-top: 12px;
  color: white;
}
.mint-popup,
.mint-popup-bottom {
  width: 100%;
  height: 220px;
}
h4 {
  text-align: center;
  margin-top: 10px;
}
hr {
  margin: 10px;
  color: aliceblue;
}
.sell {
  background: red;
  border: none;
  box-shadow: 0 0 2px 2px red;
  padding: 6px;
  margin-top: 12px;
  color: white;
}
.shopping {
  background: #0099ff;
  border: none;
  box-shadow: 0 0 2px 2px #0099ff;
  padding: 6px;
  margin-top: 12px;
  color: white;
  margin-left: 36px;
}
.info {
  width: 360px;
  margin: 0 auto;
}
p {
  padding: 16px 0 16px 10px;
}
.info span {
  padding: 10px;
}
.button {
  width: 260px;
  margin: 0 auto;
  padding-top: 20px;
}
.reduce,
.add {
  box-shadow: none;
  width: 30px;
}
.button input {
  width: 50px;
  text-align: center;
  height: 23px;
}
</style>
