<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="form">
    <el-form-item label="Name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="Password Again">
      <el-input v-model="form.password_once"></el-input>
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
        name: "",
        password: "",
        password_once: ""
      }
    };
  },
  methods: {
    handlesubmit() {
      console.log(this.form.name);
      var data = new FormData()
      data.append("name", this.form.name)
      data.append("password", this.form.password)
      data.append("password_once", this.form.password_once)
      this.$http
        .post("http://139.180.194.174:8082/users",data)
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