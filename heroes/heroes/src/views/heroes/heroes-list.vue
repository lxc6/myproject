<template>
  <!-- 英雄组件 -->
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- 跳转至添加 -->
    <router-link class="btn btn-success" to="/edit">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>编号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>境界</th>
            <th>战力</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- 循环生成list -->
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.sex }}</td>
            <td>{{ item.level }}</td>
            <td>{{ item.power }}</td>
            <td>
              <router-link :to="`/edit/${item.id}`">编辑</router-link
              >&nbsp;&nbsp;
              <a href="#" @click.prevent="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "heroes-list",
  data() {
    return {
      list: []
    };
  },
  methods: {
    get() {
      this.$axios.get("/heroes").then(res => {
        this.list = res.data;
      });
    },
    del(id) {
      if (confirm("确定要删除吗？")) {
        this.$axios.delete(`/heroes/${id}`).then(res => {
          // 删除后渲染
          this.get();
        });
      }
    }
  },
  created() {
    this.get();
  }
};
</script>

<style></style>
