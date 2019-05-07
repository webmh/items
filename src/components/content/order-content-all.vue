<template>
  <div class="bg">
    <div class="w cont-all">
      <div class="cont-left">
        <div class="btns">
          <img class="icon1" src="../../assets/img/btn-icon.png" alt>
          <span>订单</span>
          <img class="icon2" src="../../assets/img/btn-icon2.png" alt>
        </div>
        <ul class="btns-next">
            <li><a href="javascript:;" @click.prevent="com='order'">所有订单</a></li>
            <li><a href="javascript:;" @click.prevent="com='two'">今日订单</a></li>
            <li><a href="javascript:;" @click.prevent="com='three'">等待出库</a></li>
            <li><a href="javascript:;">等待收货</a></li>
            <li><a href="javascript:;">完成订单</a></li>
            <li><a href="javascript:;">取消订单</a></li>
            <li><a href="javascript:;">退货订单</a></li>

        </ul>
          <div class="btns">
             <img class="icon1" src="../../assets/img/btn-icon.png" alt>
             <span>订单催付</span>
          <img class="icon2" src="../../assets/img/btn-icon2.png" alt>
        </div>
        <ul class="btns-next">
            <li><a href="javascript:;">订单催付</a></li>
            <li><a href="javascript:;">今日订单</a></li>
            <li><a href="javascript:;">等待出库</a></li>
            <li><a href="javascript:;">等待收货</a></li>
            <li><a href="javascript:;">等待出货</a></li>
            <li><a href="javascript:;">等待出货</a></li>
            <li><a href="javascript:;">等待出货</a></li>
        </ul>

        <div class="btns">
             <img class="icon1" src="../../assets/img/btn-icon.png" alt>
             <span>付款关怀</span>
          <img class="icon2" src="../../assets/img/btn-icon2.png" alt>
        </div>
        <ul class="btns-next">
            <li><a href="javascript:;">付款关怀</a></li>
            <li><a href="javascript:;">付款关怀</a></li>
            <li><a href="javascript:;">付款关怀</a></li>
            <li><a href="javascript:;">付款关怀</a></li>
            <li><a href="javascript:;">付款关怀</a></li>
            <li><a href="javascript:;">付款关怀</a></li>
            <li><a href="javascript:;">付款关怀</a></li>
        </ul>

        <div class="btns">
             <img class="icon1" src="../../assets/img/btn-icon.png" alt>
             <span>物流提醒</span>
          <img class="icon2" src="../../assets/img/btn-icon2.png" alt>
        </div>
        <ul class="btns-next">
            <li><a href="javascript:;">物流提醒</a></li>
            <li><a href="javascript:;">物流提醒</a></li>
            <li><a href="javascript:;">物流提醒</a></li>
            <li><a href="javascript:;">物流提醒</a></li>
            <li><a href="javascript:;">物流提醒</a></li>
            <li><a href="javascript:;">物流提醒</a></li>
            <li><a href="javascript:;">物流提醒</a></li>

        </ul>
        
        <div class="btns">
             <img class="icon1" src="../../assets/img/btn-icon.png" alt>
             <span>评价关怀</span>
          <img class="icon2" src="../../assets/img/btn-icon2.png" alt>
        </div>
        <ul class="btns-next">
            <li><a href="javascript:;">评价关怀</a></li>
            <li><a href="javascript:;">评价关怀</a></li>
            <li><a href="javascript:;">评价关怀</a></li>
            <li><a href="javascript:;">评价关怀</a></li>
            <li><a href="javascript:;">评价关怀</a></li>
            <li><a href="javascript:;">评价关怀</a></li>
            <li><a href="javascript:;">评价关怀</a></li>
            
        </ul>
      </div>
      <component :is="com"></component>
  <!-- <order/>
  <two/> -->
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import order from "./order-page"  //order content
import two from "./two-test"      //tets one
import three from "./three-test"  //test three 
export default {
  data(){
    return{
      com:"order"
    }
  },
    mounted(){
       $(".btns").next('ul').eq(0).show()   //默认高亮
        $(".btns").on("click",function(){
             $(".btns").not($(this)).next("ul").hide();      //事件触发之前除了本身外，初始化其他兄弟
           if($(this).next('ul').css('display')=='block'){
                $(this).next('ul').hide();
           }else if($(this).next('ul').css('display')=='none'){
                $(this).next('ul').show();
           }
        })
    },
  components: {
    order,  //主页面
    two,    //test two
    three   //test three
    }
};
</script>

<style scoped>
/* th背景 */
.tab-content tr:first-child{
  background: #f7f7f7;
}
.tab-content tr:first-child th{
  border: 0;
}
.tad-bottom .form-inline{
    float: left;
}
.tad-bottom p{
    float: right;
}
.tad-bottom p span{
    color: #e36c5e;
    padding-right: 10px;
}
/* form-msg */
.form-msg{
    margin-left: 15px;
}
.before-T{
    margin-left: 20px;
}
.tab-one>td{
    border-top: 0;
    padding-top: 8px;
}
.before{
    margin: 0;
}
.before>span{
    margin: 0 10px;
}
/* 按钮边框 */
.btn{
    border: 1px solid #d8dce1;
}
.btn-cx{
    background: #507ae1;
    color: white;
}
/* 输入框文字样式 */
input[type=text]{
    color: #464646;
    font-size: 14px;
}
/* cont-all */
.bg {
  background:#f5f5f5;
}
/* input span */
.form-group span{
    font-size: 18px;
    font-weight: bold;
    color: #262626;
}
table{
    background: #ffffff;
}
/* 第一个表格 */
.tab-order th{
    font-size: 24px;
    border: none;
    display: inline-block;
}
.tab-order h3{
    display: inline-block;  
    font-size: 16px;
    color: #8c8c8c;
    line-height: 65px;
}
.btns{
  width: 100%;
  height: 60px;
  cursor:pointer;
  padding: 20px 0;
    font-weight: 900;
  background: #eef1f5;
}
.btns-next{
    display: none;
}
.btns-next li{
    width: 100%;
}
.btns-next li a{
    padding-left: 60px;
    line-height: 60px;
    display: block;
    color: #576473;
    font-weight: 900;
}
.btns img{
  margin: 0 20px;
  vertical-align: bottom;

}
.btns .icon2 {
  float: right;
  margin:0 20px;
  margin-top: 7px;
}
.btns span{
    line-height: 20px;
}
.cont-all {
  overflow: hidden;
  padding-top: 50px;
}
.cont-left {
  width: 306px;
  float: left;
}
.cont-right {
  width: 1275px;
  float: right;
}
</style>
