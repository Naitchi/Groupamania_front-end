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
    this.$store.dispatch("auth/me").then(
      () => {
        console.log("userId récupérer");
        console.log(this.$store.state.auth.user);
      },
      (error) => {
        console.log(error);
        if (this.$store.state.auth.user == null) {
          this.$store.dispatch("auth/logout");
          this.$router.push("/login");
        }
      }
    );
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