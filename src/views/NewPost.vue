<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="form">
    <el-form-item label="Title ">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="Content">
      <el-input type="textarea" rows="10" v-model="form.content"></el-input>
    </el-form-item>
    <el-button v-on:click="handlesubmit">Default</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      form: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    handlesubmit() {
      var data = new FormData();
      data.append("title", this.form.title);
      data.append("content", this.form.content);
      this.$http
        .post("/posts/new", data)
        .then(response => {
          console.log(response.data);
          this.$notify({
            title: "发布成功",
            message: `你可以取主页看看啦`,
            type: "success"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
