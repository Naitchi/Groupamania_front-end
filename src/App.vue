<template>
  <div id="app">
    <Nav />
    <News />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import News from "./components/News";

export default {
  name: "App",

  components: {
    Nav,
    News,
  },

  data: () => ({}),
};
</script>

<style>
@import "./assets/styles/style.css";
</style>