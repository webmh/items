<template>
      <div class="cont-right">
          <table class="table tab-order">
              <tr>
                  <th>订单中心</th>
                  <h3>查询店铺订单数据</h3>
              </tr>
              <tr>
                <td>
                  <form class="form-inline">  
                    <div class="form-group">
                        <span>订单编号：</span><input type="text" class="form-control" placeholder="">
                    </div>  
                     <div class="form-group">
                        <span>买家姓名：</span><input type="text" class="form-control" placeholder="">
                    </div>
                     <div class="form-group">
                        <span>电话：</span><input type="text" class="form-control" placeholder="">
                    </div>
                     <div class="form-group">
                        <span>买家账号：</span><input type="text" class="form-control" placeholder="">
                    </div>
                  </form>
                </td>
              </tr>
              <tr  class="tab-one">
                <td>
                  <form class="form-inline">  
                    <div class="form-group">
                        <span>购买指标：</span><button class="btn">时间</button>
                    </div>  
                    <div class="form-group before-T">
                        <input type="text" class="form-control" value="2019-04-18 00:00:00">
                    </div> 
                     <div class="form-group before">
                         <span>至</span>
                        <input type="text" class="form-control" value="2019-05-03 23:59:59">
                    </div> 
                     <div class="form-group">
                        <span>下单地区：</span> <button class="btn">全部</button>
                    </div>  
                    <div class="form-group">
                       <button class="btn btn-cx">查询</button>
                    </div>  
                  </form>
                </td>
              </tr>
              <tr class="tad-bottom">
                 <td>
                     <form class="form-inline">
                         <div class="form-group">
                           <button class="btn btn-cx">发短信</button>
                         </div>
                         <div class="form-group form-msg">
                           <button class="btn btn-cx">全部发送</button>
                         </div>
                         <div class="form-group form-msg">
                           <button class="btn btn-cx">黑名单</button>
                         </div>
                     </form>
                     <p><span>如数据非最新请在右上角同步订单</span>更新时间：2019-05-02 08:40:01</p>
                 </td>
              </tr>
          </table>
          <table class="table table-bordered tab-content">
              <tr>
                  <th><input type="checkbox"></th>
                  <th>订单号</th>
                  <th>订单状态</th>
                  <th>账号</th>
                  <th>姓名</th>
                  <th>电话</th>
                  <th>地区</th>
                  <th>实付金额</th>
                  <th>下单时间</th>
              </tr>
              <tr v-for="item in list" :key="item.ID">
                  <th><input type="checkbox"></th>
                  <td :style="[textStyle]">{{item.number}}</td>
                  <td>{{item.mark}}</td>
                  <td>{{item.ID}}</td>
                  <td>{{item.name}}</td>
                  <td :style="[textStyle]">{{item.phone}}</td>
                  <td>{{item.region}}</td>
                  <td>{{item.price}}</td>
                  <td>{{item.date}}</td>
              </tr>
          </table>
      </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
             textStyle:{
                    color:"#133eda",
                    fontWeight: 700
                    
                },
            list:[
                {
                    number:945661025562,
                    mark:"未付款",
                    ID:"jb_6132132145dqwd",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"北京",
                    price:99,
                    date:"2019-05-02 14:03:43"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_6132231132",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"上海",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_6136935132",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"广州",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_6132135432",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"深圳",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_61321321351",
                    name:"程序猿",
                    phone:"131****3288",
                    region:'西安',
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_61321352",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"新疆",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_61335132",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"黑龙江",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_613135132",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"湖南",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_613213513",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"湖北",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
                {
                    number:945661025562,
                    mark:"已付款",
                    ID:"jb_613213512",
                    name:"程序猿",
                    phone:"131****3288",
                    region:"青岛",
                    price:99,
                    date:"2019-05-03 18:43:33"
                },
            ]
        }
    },
    mounted(){
    },
  components: {}
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
.cont-right {
  width: 1275px;
  float: right;
}
</style>
