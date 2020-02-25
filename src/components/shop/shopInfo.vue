<!--
 * @Description: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2019-09-05 00:29:46
 * @LastEditors: Lianglin
 * @LastEditTime: 2019-09-05 01:03:12
 -->
<template>
  <div class="wrapper">
    <div class="contain shopInfo">
		<div class="title">
			{{shopInfoList[0].title}}
		</div>
		<div class="content" v-html="shopInfoList[0].content"></div>
	</div>
  </div>
</template>

<script>
import * as api from "@/api/api";
export default {
  data() {
    return {
		shopInfoList:[{
			title:'',
			content:''
		}]
	};
  },
  created() {
    this.getList(this.$route.params.id);
  },
  methods: {
    getList(id) {
      this.http.get(api.GETDESC + id).then(res => {
        if (res.status == 200) {
		//   console.log(res);
		  this.shopInfoList[0].title = res.data.message[0].title;
		  this.shopInfoList[0].content = res.data.message[0].content
          this.$indicator.close();
        }
      });
    }
  }
};
</script>

<style scoped>
.content{
	width:100%
}
>>>.gomeImgLoad{
	width:100% !important
}
>>>table{
	width:100% !important
}
>>>table td .gomeImgLoad{
	display: none 
}
.title{
	font-size: 14px;
    text-align: center;
    font-weight: 900;
    padding: 20px 0;
}
</style>
