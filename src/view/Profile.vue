<template>
  <div>
    <Nav />
    <div class="margin-nav"></div>
    <Profile />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Profile from "../components/Profile.vue";

export default {
  components: { Profile, Nav },
};
</script>

<style>
.margin-nav {
  margin-top: 60px;
}
@import "../assets/styles/style.css";
</style>