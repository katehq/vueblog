<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="form">
    <el-form-item label="Title ">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="Content">
      <el-input type="textarea" v-model="form.content"></el-input>
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
        title:'',
        content:''
      }
    };
  },
  methods: {
    handlesubmit() {
      var data = new FormData()
      data.append("title", this.form.title)
      data.append("content", this.form.content)
      this.$http
        .post("http://127.0.0.1:8082/posts/new",data)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
