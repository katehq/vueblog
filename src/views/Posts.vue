<template>
  <div>hello</div>
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
      console.log(this.posts);
    }
  },
  beforeMount() {
    this.load();
  }
};
</script>