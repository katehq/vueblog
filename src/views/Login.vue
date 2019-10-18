

<template>
  <div>
    <el-alert v-if="errormsg" type="error">{{errormsg}}</el-alert>
    <el-form :label-position="labelPosition" label-width="100px" :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-button v-on:click="handlesubmit">Default</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "top",
      form: {
        name: "",
        password: ""
      },
      errormsg: ""
    };
  },
  methods: {
    handlesubmit() {
      var data = new FormData();
      data.append("name", this.form.name);
      data.append("password", this.form.password);
      this.$http
        .post("/login", data)
        .then(response => {
          console.log(response.data);
          if (response.data.token == null) {
            this.errormsg = "密码错误";
          } else {
            localStorage.setItem("token", response.data.token);

            this.$router.push({ name: "home" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  beforeCreate() {
    if (localStorage.getItem("token") != undefined) {
      this.$router.push({ name: "home" });
    }
  },
  updated() {
    if (localStorage.getItem("token") != null) {
      this.$router.push({ name: "home" });
    }
  }
};
</script>