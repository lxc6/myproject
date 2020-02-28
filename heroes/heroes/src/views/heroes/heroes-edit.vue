<template>
  <!-- 添加与编辑模块 -->
  <div>
    <h2 class="sub-header">{{ changeText }}英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          v-model.trim="formData.name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          v-model.trim="formData.sex"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入性别"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">境界</label>
        <input
          v-model.trim="formData.level"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入境界"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">战力</label>
        <input
          v-model.trim="formData.power"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入战力"
        />
      </div>
      <!-- 注意单词拼写 -->
      <button @click.prevent="add" class="btn btn-success">
        确定{{ changeText }}
      </button>
    </form>
  </div>
</template>

<script>
// import Axios from "axios";
export default {
  name: "heroes-edit",
  data() {
    return {
      formData: {
        name: "",
        sex: "",
        level: "",
        power: ""
      }
    };
  },
  methods: {
    add() {
      if (
        this.formData.name &&
        this.formData.sex &&
        this.formData.power &&
        this.formData.level
      ) {
        if (this.$route.params.id) {
          this.$axios
            .put(
              `/heroes/${this.$route.params.id}`,
              this.formData
              // 单词！！单词！！单词！！！
            )
            .then(() => {
              this.$router.push("/heroes");
            });
          // if (this.$route.params.id) {
          //   // 应该调用 编辑接口
          //   axios
          //     .put(
          //       `http://localhost:8081/heroes/${this.$route.params.id}`,
          //       this.formData
          //     )
          //     .then(() => {
          //       // 一旦成功了 说明编辑成功了  回到列表页
          //       this.$router.push("/heroes"); // 回到列表页
          //     });
        } else {
          this.$axios.post("/heroes", this.formData).then(() => {
            // 添加成功后跳转
            this.$router.push("/heroes");
          });
        }
      } else {
        alert("内容不能为空哦");
      }
    },
    getVal() {
      if (this.$route.params.id) {
        this.$axios.get(`/heroes/${this.$route.params.id}`).then(res => {
          this.formData = res.data;
        });
      }
    }
  },
  created() {
    this.getVal();
  },
  computed: {
    changeText() {
      return this.$route.params.id ? "编辑" : "添加";
    }
  }
};
</script>

<style></style>
