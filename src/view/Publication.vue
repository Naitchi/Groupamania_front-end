<template>
  <div>
    <Nav />
    <div class="margin-nav"></div>
    <Publication />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Publication from "../components/Publication.vue";

export default {
  components: { Publication, Nav },
};
</script>

<style>
.margin-nav {
  margin-top: 60px;
}
@import "../assets/styles/style.css";
</style>