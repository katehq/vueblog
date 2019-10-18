<template>
  <div class="content">
    <el-row>
      <el-col :xs="0" :lg="6">
        <div class="grid-content">
          <el-tag>
            <el-link href="https://twitter.com/luowanshun" :underline="false">Twitter</el-link>
          </el-tag>
          <el-tag type="info">
            <el-link href="https://github.com/luowanshun" :underline="false">Github</el-link>
          </el-tag>
        </div>
      </el-col>
      <el-col :lg="12" :md="24" :xs="24">
        <div class="grid-content">
          <h2 id="title">{{title}}</h2>
          <div id="info">
            <span id="postime">{{time}}</span>
            <span id="views">views: {{views}}</span>
          </div>
          <div v-html="content"></div>
        </div>
      </el-col>
      <el-col :lg="6" :xs="0">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      time: "",
      views: ""
    };
  },
  methods: {
    load() {
      this.$http.get("/post/" + this.$route.params.id).then(res => {
        this.title = res.data.post.title;
        this.content = res.data.post.content;
        this.time = res.data.post.time;
        this.views = res.data.post.views;
      });
    }
  },
  beforeMount() {
    this.load();
  }
};
</script>

<style>
#title {
  margin-left: 10px;
}

#postime,
#views {
  font-size: 10px;
  color: grey;
  margin-right: 3px;
}

#info {
  margin-left: 3px;
}

img {
  width: 95%;
  margin: 5px auto;
}
</style>