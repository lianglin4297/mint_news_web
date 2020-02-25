<!--
 * @Description:
 * @version:
 * @Author: Lianglin
 * @Date: 2019-09-04 18:09:43
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 17:35:53
 -->
<template>
  <div class="wrapper">
    <div class="contain">
      <div class="title">{{newDetail[0].title}}</div>
      <div class="article" v-html="newDetail[0].content"></div>
      <div class="postComment">
        <input type="text" placeholder="请输入评论内容" v-model="content" />
        <button @click="postComment()">提交评论</button>
      </div>
      <div
        class="comment"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
      >
        <div class="user" v-for="(item,index) in comment" :key="index">
          <p>评价人：{{item.user_name}}</p>
          <p>
            评价内容：
            <span v-html="item.content"></span>
          </p>
          <p>评价时间：{{item.add_time | formatDate}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../../api/api";

export default {
  name: "",
  data() {
    return {
      newDetail: [
        {
          title: "",
          content: ""
        }
      ],
      comment: [],
      index: 0,
      content: "",
      loading: false,
      up: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      let id = this.$route.params.id;
      this.http.get(api.GETNEWID + "/" + id).then(res => {
        if (res.status == 200) {
          this.newDetail[0].title = res.data.message[0].title;
          this.newDetail[0].content = res.data.message[0].content;
          this.$indicator.close();
        }
      });
    },
    getComment(index) {
      let id = this.$route.params.id;
      this.http
        .get(api.GETCOMMENT + "/" + id + "?pageindex=" + index)
        .then(res => {
          if (res.status == 200) {
            if (this.index == 1) {
              this.comment = res.data.message;
              this.up = false;
            } else {
              this.comment = this.comment.concat(res.data.message);
              this.up = true;
            }
            this.$indicator.close();
          }
        });
    },
    loadMore() {
      this.loading = true;
      this.$indicator.open("加载中");
      this.index++;
      this.getComment(this.index);
      this.loading = false;
    },
    postComment() {
      let id = this.$route.params.id;
      if (this.content == "") {
        this.$toast({
          message: "评论内容不能为空"
        });
        return false;
      } else {
        var params = {
          content: this.content
        };
        this.http.post(api.POSTCOMMENT + "/" + id, params).then(res => {
          this.$toast({
            message: "评论成功"
          });
          this.content = "";
          this.index = 1;
          this.getComment(this.index);
        });
      }
    },
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: 900;
  padding: 20px 0;
}
.postComment {
  height: 70px;
  padding: 30px 10px;
  text-align: center;
}
.user {
  background: rgba(189, 227, 247, 0.5);
  color: rgb(8, 20, 180);
  padding: 10px 4px;
  margin: 10px;
  border-radius: 10px;
}
.user p {
  padding: 2px;
}
input {
  width: 100%;
  height: 30px;
  border: 1px solid #0099ff;
}
.postComment button {
  width: 50%;
  height: 42px;
  margin-top: 12px;
  background: #0099ff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  letter-spacing: 3px;
}
>>> .user img {
  width: 300px !important;
}
.wrapper {
  position: relative;
}
.van-button {
  position: fixed;
  right: 0;
  bottom: 20%;
}
</style>
