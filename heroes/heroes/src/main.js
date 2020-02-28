import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'; // 引入 bootstarp的样式文件
import './assets/index.css';
import axios from 'axios'
// 设置统一请求头地址 重复接口地址
axios.defaults.baseURL = "http://localhost:8081" //需求其他域名接口时再单独写全替换
Vue.prototype.$axios = axios //将axios属性添加到原Vue型连可全局应用
// 开发原则 不把鸡蛋都放在一个篮子里
import router from './router' //相当于直接获取./router/index.js文件
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
