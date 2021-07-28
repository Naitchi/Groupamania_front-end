<template>
  <div>
    <Nav />
    <News />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import News from "../components/News.vue";

export default {
  components: { News, Nav },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>