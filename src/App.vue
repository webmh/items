<template>
  <div id="app">
    <headerall/>
    <router-view/>
  </div>
</template>

<script>
// import "./common/reset.css"; //初始化css
import "./assets/css/addBS.css"; //添加的bootstrap样式
import headerall from "./components/header/header-all.vue";


import router from "./router";
export default {
  name: "app",
  components: {
    headerall
  }
};
</script>

<style>
</style>