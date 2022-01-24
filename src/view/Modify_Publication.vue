<template>
  <div>
    <Nav />
    <div class="margin-nav"></div>
    <ModifyPublication />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import ModifyPublication from "../components/Modify_Publication.vue";

export default {
  components: { ModifyPublication, Nav },
};
</script>

<style>
.margin-nav {
  margin-top: 60px;
}
@import "../assets/styles/style.css";
</style>