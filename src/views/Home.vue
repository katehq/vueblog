<template>
  <div class="home">
    <el-row>
      <el-col :xs="0" :lg="6">
        <div class="grid-content bg-purple">
          <el-tag>
            <el-link href="https://twitter.com/luowanshun" :underline="false">Twitter</el-link>
          </el-tag>
          <el-tag type="info">
            <el-link href="https://github.com/luowanshun" :underline="false">Github</el-link>
          </el-tag>
        </div>
      </el-col>
      <el-col :lg="12" :md="24" :xs="24">
        <div class="grid-content bg-purple-light">
          <div v-for="post in posts" :key="post.ID">
            <el-card class="box-card" @click.native="gopost(post)">
              <p>{{post.title}}</p>
              <span class="postime">{{post.time}} views: {{post.views}}</span>
            </el-card>
          </div>
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
  name: "home",
  data() {
    return {
      posts: "james",
      love: "iiuj"
    };
  },
  methods: {
    load() {
      this.$http.get("/posts").then(res => {
        this.posts = res.data.posts;
      });
    },
    gopost(post) {
      this.$router.push({ name: "postid", params: { id: post.ID } });
    }
  },
  beforeMount() {
    this.load();
  }
};
</script>

<style>
.postime {
  font-size: 10px;
  color: grey;
}
</style>