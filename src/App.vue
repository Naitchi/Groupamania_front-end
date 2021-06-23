<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  created() {
    EventBus.$on("event", this.mafonction);
  },
  methods: {
    mafonction() {
      console.log("j'ai été appelé");
    },
  },
  name: "App",
  data: () => ({}),
};
</script>

<style>
@import "./assets/styles/style.css";
</style>