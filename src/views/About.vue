<template>
  <div class="about">
    <el-row>
      <el-col :xs="0" :lg="6">
        <div class="grid-content">
          <img :src="image" />
        </div>
      </el-col>
      <el-col :span="8" :xs="24" :lg="12">
        <div class="grid-content">
          <h2>Timeline</h2>
          <p>My Email is luowanshun@gmail.com</p>
          <p>The blog is powered by go and vue</p>
          <div class="block">
            <el-timeline id="timeline">
              <el-timeline-item timestamp="2019/10/12" placement="top">
                <el-card>
                  <h4>开发我的博客项目</h4>
                  <p>用 vue + go + element UI</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :lg="12">
        <div class="grid-content">
          <span></span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/logo.png")
    };
  }
};
</script>

<style>
#timeline {
  padding: 0;
}
</style>
