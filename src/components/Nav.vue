<template>
  <nav class="navbar navbar-light bg-darkblue container-fluid fixed">
    <div class="nav">
      <div class="btn-nav">
        <button type="button" class="btn color">
          <i class="fas fa-home"></i> Accueil
        </button>
        <button type="button" class="btn color">Profil</button>
        <button @click.prevent="logOut" type="button" class="btn color">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
 
<style>
@import "../assets/styles/style.css";
</style>