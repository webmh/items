import vue from 'vue'
import Router from 'vue-router'
import index from '../components/content/index-content-all' //首页
import order from '../components/content/order-content-all' //订单中心
import orders from '../components/content/order-page'       //订单中心 > orders

export default new Router({
    
    mode:'history', // history模式 去掉地址栏中的'#'
    routes:[
        {
            path:'*',
            redirect:'/'        //重定向
        },
        {
            path:'/',component:index   //首页高亮
        },
        {
            path:'/order',component:order,  //订单中心
            children:[
                {
                    path:'ORDES',      //子路由
                    component:orders    //子组件
                } 
            ]
        },
    ]
})