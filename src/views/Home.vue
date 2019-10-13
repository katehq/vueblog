<template>
<div class="home">
<div v-for="post in posts" :key="post.ID">
<el-card class="box-card">
  <h1> {{post.title}}</h1>
</el-card>
</div>
</div>
</template>

<script>
export default {
  name:"home",
  data() {
    return {
      posts: "james",
      love: 'iiuj'
    }
  },
  methods: {
    load() {
      this.$http.get("http://139.180.194.174:8082/posts")
    .then((res)=>{
      this.posts = res.data.posts
    })
    }
  },
  beforeMount(){
    this.load()
  }
}
</script>