<template>
  <div id="header-all">
    <headerTop/>
    <headerBottom/>
    <!-- <indexContentAll/> 
    <orderContentAll/> -->
    <!-- <component :is="com"></component> -->
  </div>
</template>

<script>
import headerTop from "./header-top";
import headerBottom from "./header-bottom";
import indexContentAll from "../content/index-content-all";
import orderContentAll from "../content/order-content-all";

export default {
//   data() {
//     return {
//       com: "indexContentAll"
//     };
//   },
  components: {
    headerTop, //头部上部分
    headerBottom,	//头部
    indexContentAll,	//首页content
    orderContentAll		//订单content
  }
};
</script>

<style>
</style>
