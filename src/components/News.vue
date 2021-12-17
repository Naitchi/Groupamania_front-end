<template>
  <div class="main-container bg-light">
    <Post />
    <Publications />
  </div>
</template>


<script>
import Publications from "./Publications";
import Post from "./Post.vue";

export default {
  name: "News",
  components: { Publications, Post },

  data: () => ({}),
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>