<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import EventBus from "./EventBus";
export default {
  mounted() {
    EventBus.$on("event", this.mafonction);
    this.$store.dispatch("auth/me").then(
      () => {
        console.log("userId récupérer");
      },
      (error) => {
        console.log(error);
        console.log("redirection vers le login");
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      }
    );
  },
  methods: {
    mafonction() {
      console.log("j'ai été appelé");
    },
  },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
@import "./assets/styles/style.css";
</style>