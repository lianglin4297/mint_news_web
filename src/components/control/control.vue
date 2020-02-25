<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-04 16:11:19
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-06 17:15:49
 -->
<template>
  <div class="wrapper">
    <div class="contain">
      <mt-cell title="姓名" value="梁林">
        <i slot="icon" class="fa fa-user-circle"></i>
      </mt-cell>
      <mt-cell title="性别" value="男">
        <i slot="icon" class="fa fa fa-mars"></i>
      </mt-cell>
      <mt-cell title="年龄" value="***">
        <i slot="icon" class="fa fa-i-cursor"></i>
      </mt-cell>
      <mt-cell title="毕业院校" value="四川农业大学">
        <i slot="icon" class="fa fa-graduation-cap"></i>
      </mt-cell>
      <mt-cell title="所在学院" value="信息工程学院">
        <i slot="icon" class="fa fa-info"></i>
      </mt-cell>
      <mt-cell title="专业" value="计算机科学与技术">
        <i slot="icon" class="fa fa-info"></i>
      </mt-cell>
      <mt-cell title="CSDN" to="https://me.csdn.net/liang4297" is-link value="前往CSDN">
        <i slot="icon" class="fa fa-bookmark-o "></i>
      </mt-cell>
      <mt-cell title="github" to="https://github.com/lianglin4297" is-link value="前往github">
        <i slot="icon" class="fa fa-github"></i>
      </mt-cell>
      <mt-cell title="我的小站" to="https://lianglin4297.github.io/" is-link value="前往小站">
        <i slot="icon" class="fa fa-thumbs-o-up"></i>
      </mt-cell>
      <mt-cell title="技能标签">
        <i slot="icon" class="fa fa-tag"></i>
         <mt-badge type="warning" size="large">PhotoShop</mt-badge> &nbsp;
         <mt-badge type="warning" size="large">Less</mt-badge>
      </mt-cell>
      <mt-cell>
        <mt-badge type="primary" size="large">Vue</mt-badge>&nbsp;
        <mt-badge type="primary" size="large">Wordpress</mt-badge>&nbsp;
        <mt-badge type="success" size="large">PHP</mt-badge>&nbsp;
        <mt-badge type="success" size="large">小程序</mt-badge>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/api";
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      setTimeout(() => {
        this.$indicator.close();
      }, 500);
    }
  }
};
</script>
