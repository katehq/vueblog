<template>
  <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/about">About</router-link>
    </el-menu-item>

    <div v-if="!isLogin" class="user">
      <el-menu-item>
        <router-link to="/login">Login</router-link>
      </el-menu-item>
    </div>

    <div v-if="isLogin" class="user">
      <el-submenu index="3">
        <template slot="title">Workspace</template>
        <el-menu-item index="3-1">
          <router-link to="/posts/new">New</router-link>
        </el-menu-item>
        <el-menu-item index="3-2">
          <router-link to="/logout">Logout</router-link>
        </el-menu-item>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      isLogin: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  beforeMount() {
    if (localStorage.getItem("token") != null) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  updated() {
    if (localStorage.getItem("token") != null) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
};
</script>

<style  scoped>
.user {
  float: right;
}
</style>