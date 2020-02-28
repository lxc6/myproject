//把文件命名为index？
// import test from './router',如果router是一个文件夹
// import test from './router' 相当于直接获取./router/index.js文件
import Vue from 'vue' //引入全局vue
import VueRouter from "vue-router" //引入第三方路由模块
import HeroList from "../views/heroes/heroes-list"
import WeaponList from "../views/weapon/weapon-list"
import GearList from "../views/gear/gear-list"
import HeroesEdit from "../views/heroes/heroes-edit"; //添加与修改list

Vue.use(VueRouter) //全局注册路由对象 使用router

const router = new VueRouter({
  // 配置激活样式router-link的默认类名改成boot的active
  linkActiveClass: 'active',
  // 配置路由表
  // 路由及组件---src/views目录
  routes: [{
    path: '/',
    redirect: '/heroes'
  }, {
    path: '/heroes',
    component: HeroList

  }, {
    path: '/weapon',
    component: WeaponList

  }, {
    path: '/gear',
    component: GearList

  }, {
    path: '/edit/:id?', //动态传参
    component: HeroesEdit

  }]
})
export default router //默认导出
