<template>
  <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
  <el-menu-item index="2"><router-link to="/register">Register</router-link></el-menu-item>
</el-menu>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>