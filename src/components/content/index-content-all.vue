<template>
  <div class="bg">
    <div class="cont-all w">
      <div class="cont-left container">
        <table class="table table-bordered tab-one">
          <tr>
            <th class="data-H" colspan="4">数据中心</th>
          </tr>
          <tr>
            <td>
              短信余额
              <p>98</p>
            </td>
            <td>
              今日发送
              <p>1</p>
            </td>
            <td>
              收件箱
              <p>1</p>
            </td>
            <td>
              今日催付ROI
              <img class="img-hot" src="../../assets/img/hot.png" alt="hot">
              <p>
                1
                <a href="javascript:;">明细 ></a>
              </p>
            </td>
          </tr>
        </table>
        <table class="table table-bordered">
          <tr>
            <th class="order-H" colspan="4">数据中心</th>
          </tr>
          <tr>
            <td>
              <img src="../../assets/img/td-icon.png" alt>订单中心
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>自动催付
              <img class="img-hot" src="../../assets/img/hot.png" alt="hot">
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>二次催付
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>到付确认
              <img class="img-hot" src="../../assets/img/hot.png" alt="hot">
            </td>
          </tr>
          <tr>
            <td>
              <img src="../../assets/img/td-icon.png" alt>在线支付
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>发货提醒
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>迟发提醒
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>再投提醒
              <img class="img-hot" src="../../assets/img/hot.png" alt="hot">
            </td>
          </tr>
          <tr>
            <td>
              <img src="../../assets/img/td-icon.png" alt>签收关怀
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>取消提醒
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>退货提醒
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>评价提醒
            </td>
          </tr>
          <tr class="stance-tr"></tr>
        </table>
        <table class="table table-bordered">
          <tr>
            <th class="vip-H" colspan="4">数据中心</th>
          </tr>
          <tr>
            <td>
              <img src="../../assets/img/td-icon.png" alt>短信营销
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>手动群发
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>上传发送
              <img class="img-hot" src="../../assets/img/hot.png" alt="hot">
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>客户列表
            </td>
          </tr>
          <tr>
            <td>
              <img src="../../assets/img/td-icon.png" alt>客户分组
              <img class="img-hot" src="../../assets/img/hot.png" alt="hot">
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>RFM模型
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>营销列表
            </td>
            <td>
              <img src="../../assets/img/td-icon.png" alt>营销报表
            </td>
          </tr>
          <tr class="stance-tr"></tr>
        </table>
      </div>
      <div class="cont-right container">
        <table class="table table-bordered tab-right">
          <tr height="120">
            <th class="head-H" colspan="2">X X 收藏品专营店</th>
          </tr>
          <tr>
            <td>
              当前版本：
              <span class="info">专业版</span>
            </td>
            <td>
              绑定微信：
              <span class="info">未绑定</span>
            </td>
          </tr>
        </table>
        <table class="table table-bordered tab-right2">
          <tr>
            <th>软件公告</th>
          </tr>
          <tr>
            <th>版本更新</th>
          </tr>
          <tr>
            <td>
              <div class="tab-cont">
                <p>
                  【新功能】
                  <a href="javascript:;">不同商品发送不同短信</a>可在订单关怀内设置
                  <span>11-23</span>
                </p>
                <p>
                  【新功能】
                  <a href="javascript:;">短信状态报告</a>可在发件箱内查看送达明细
                  <span>11-23</span>
                </p>
                <p>
                  【新功能】
                  <a href="javascript:;">订单再投</a>订单投递未签收，再投短信通知用户
                  <span>11-20</span>
                </p>
                <p>
                  【新功能】
                  <a href="javascript:;">上传号码发送</a>可以导入表格，批量发送短信
                  <span>10-25</span>
                </p>
                <p>
                  【新功能】
                  <a href="javascript:;">货到付款，</a>短信确认，回复同步备注
                  <span>9-14</span>
                </p>
              </div>
            </td>
          </tr>
        </table>
        <table class="table table-bordered tab-right2">
          <tr>
            <th>新手指导和常见问题</th>
          </tr>
          <tr>
            <td>
              <div class="tab-cont">
                <p>
                  <a href="javascript:;">子账号授权使用方法</a>
                  <span>7-04</span>
                </p>
                <p>
                  <a href="javascript:;">系统一直提示安装证书处理方法</a>
                  <span>6-15</span>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    $(function() {
      $(".info")
        .eq(0)
        .css({ background: "#507ae1" });
      $(".info")
        .eq(1)
        .css({ background: "#e69c35" });
    });
  },
  components: {}
};
</script>

<style scoped>
/* .stance {
  width: 100%;
  height: 28px;
} */
.stance-tr {
  height: 30px;
  border-bottom: 1px solid red !important;
}
/* 右边表格2 */
.tab-right2 tr td {
  text-align: left;
}
.tab-right2 tr td span {
  float: right;
}
.tab-right2 tr th {
  text-indent: 1rem;
}
.tab-right2 tr:nth-child(1) {
  border-bottom: 2px solid #f5f5f5;
}
.tab-right2 tr td {
  border: 0px;
  padding: 10px 0 36px 0;
}
.tab-right2 tr:nth-child(2) th {
  font-size: 18px;
}
.tab-right2 p {
  color: #2f2f2f;
  font-size: 17px;
  font-weight: bold;
  padding: 0 15px;
  line-height: 25px;
}
/* 右边表格1 */
.tab-right td {
  border-left: 0;
  border-right: 0;
}
.cont-right td {
  padding-left: 0px;
  padding-right: 0px;
}
.info {
  display: inline-block;
  width: 67px;
  height: 25px;
  font-size: 16px;
  color: white;
  border-radius: 15px;
  vertical-align: middle;
  background: #626262;
  margin-bottom: 3px;
}
/* hot style */
.img-hot {
  position: absolute;
  display: inline;
}
/* 数据中心 */
.tab-one tr td {
  text-align: left;
  font-size: 30px;
}
.tab-one tr td p {
  font-size: 34px;
}
.tab-one tr td p a {
  margin-left: 10px;
  font-size: 14px;
}
/* 边界border取消 */
table tr td:first-child {
  border-left: 0;
}
table tr td:last-child {
  border-right: 0;
}
table {
  background: #ffffff;
  margin-bottom: 25px;
  border: 0;
  border-bottom: 1px solid #dedede;
  /* box-sizing: border-box; */
}
/* table 通用 style*/
table tr td {
  position: relative;
  text-align: center;
  padding: 25px;
  width: 25%;
  color: #626262;
  font-size: 18px;
  border: 1px solid #ebebeb;
}
/* td left iconfont */
table tr td img {
  vertical-align: middle;
  margin-right: 5px;
}
th {
  border: 0px !important;
  padding: 0px !important;
  font-size: 20px;
  text-indent: 50px;
  line-height: 55px;
}
.data-H {
  background: url("../../assets/img/shuju.png") no-repeat;
  background-position-y: center;
  background-position-x: 1rem;
}
.order-H {
  background: url("../../assets/img/msg.png") no-repeat;
  background-position-y: center;
  background-position-x: 1rem;
}
.vip-H {
  background: url("../../assets/img/vip.png") no-repeat;
  background-position-y: center;
  background-position-x: 1rem;
}
.head-H {
  background: url("../../assets/img/head.png") no-repeat;
  background-position-y: center;
  background-position-x: 1rem;
  line-height: 120px;
  text-indent: 120px;
}
.bg {
  background: #f5f5f5;
}
.cont-all {
  overflow: hidden;
  padding-top: 50px;
}
.cont-left {
  width: 1180px;
  float: left;
  background: #f5f5f5;
}
.cont-right {
  width: 380px;
  float: right;
}
</style>
