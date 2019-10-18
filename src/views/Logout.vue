<template>
  <div>
    logout successfully!
  </div>
</template>

<script>
export default {
  beforeMount() {
    localStorage.removeItem("token");
  }
};
</script>