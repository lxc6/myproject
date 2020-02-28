<template>
  <div id="app">
    <!-- nav头部 -->
    <app-header></app-header>
    <!-- sidebar 侧边栏-->
    <div class="container-fluid">
      <div class="row">
        <app-sidebar></app-sidebar>
        <!-- list列表内容 -->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 包裹容器实现过度 -->
          <transition>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./app-header";
import appSidebar from "./app-sidebar";
import appList from "./app-list";

export default {
  name: "app",
  components: {
    "app-header": appHeader,
    "app-sidebar": appSidebar,
    "app-list": appList
  }
};
</script>

<style>
/* 编写过度样式 */
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: all 0.5s linear;
}
/*不需要写离开效果 因为切换时，上一个组件离开动画与当前组件进入动画同时进行  */
</style>
