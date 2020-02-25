<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-03 17:56:06
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-04 19:32:25
 -->
<template>
  <div id="app">
    <mt-header fixed :title="title">
      <a slot="left" v-if="back" @click="backUrl()">
        <mt-button icon="back" >返回</mt-button>
      </a>
    </mt-header>
    <router-view/>
    <tabNav></tabNav>
  </div>
</template>

<script>
import tabNav from '@/components/views/nav.vue'
export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  computed:{
    title(){
      return this.$store.getters.getTitle
    },
    back(){
      return this.$store.getters.getBack
    }
  },
  components:{
    tabNav
  },
  methods:{
    backUrl(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
