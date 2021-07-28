<template>
  <div class="main-container bg-light">
    <Post />
    <Publication />
  </div>
</template>


<script>
import Publication from "./Publication";
import Post from "./Post.vue";

export default {
  name: "News",
  components: { Publication, Post },

  data: () => ({}),
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>