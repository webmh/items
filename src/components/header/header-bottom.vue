<template>
  <div>
    <div class="container-fluid ba">
      <div class="w action">
        <ul>
          <li>
            <a href="javascript:;">
              <img src="../../assets/img/logo.png" alt>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../assets/img/icon1.png" alt="菜单">
            </a>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/order">
              订单中心
              <img src="../../assets/img/bottom-icon.png" alt>
            </router-link>
          </li>
          <li>
            <a href="javascript:;">
              客戶中心
              <img src="../../assets/img/bottom-icon.png" alt>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              短信中心
              <img src="../../assets/img/bottom-icon.png" alt>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              系统设置
              <img src="../../assets/img/bottom-icon.png" alt>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              多店管理
              <img src="../../assets/img/bottom-icon.png" alt>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              帮助
              <img src="../../assets/img/bottom-icon.png" alt>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted(){
    $(".action ul li a").eq(2).addClass("show")  //默认高亮
    $(".action ul li a").on("click",function(){
      $(".action ul li a").not($(this)).removeClass("show");  //清除
      $(this).addClass("show")
      console.log( $(".action ul li a"))
    })
  }
};
</script>

<style scoped>
p {
  margin: 0;
  display: inline;
}
ul,
ul li {
  height: 68px;
  color: white;
}
ul li {
  float: left;
}
ul li a {
  font-size: 18px;
  font-weight: bold;
}
ul li + li {
  width: 132px;
}
ul li:nth-child(1) a {
  font-size: 28px;
  height: 68px;
  background: #2f5ee0;
  padding: 14px 70px;
  line-height: 68px;
}
ul li:nth-child(1) a img {
  padding-bottom: 10px;
}
ul li:nth-child(2) a:nth-child(1) {
  width: 56px;
  float: left;
  color: white;
  text-align: center;
  line-height: 68px;
  background: #507ae1;
}
ul li:nth-child(2) a:nth-child(2) {
  width: 76px;
  float: left;
  text-align: center;
  color: white;
  line-height: 68px;
}
ul li + li + li a {
  width: 132px;
  float: left;
  text-align: center;
  color: white;
  line-height: 68px;
}
ul li + li + li a img {
  margin-left: 6px;
}
/* jquery类样式 */
.show{
  background: #4163b5;
}
</style>
