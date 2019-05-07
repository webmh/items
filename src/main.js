import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import $ from "jquery"	//引入jquery
import 'bootstrap/dist/css/bootstrap.css' //引入bootstrap
import './assets/css/reset.css' 	 //初始化css
import 'bootstrap/dist/js/bootstrap.js'	//bootstrap必须文件 定位引擎



Vue.config.productionTip = false
Vue.use(VueRouter)	//安装路由
new Vue({
	el: "#app",
	router,
	render(h) {
		return h(App)
	}
})
