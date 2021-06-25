<template>
  <div id="signin">
    <h2>Connectez-vous :</h2>
    <label for="email">Email</label>
    <input id="email" type="email" />
    <label for="mdp">Mot de passe</label>
    <input id="mdp" type="password" />
    <button class="confirm">Confirmé</button>
    <a @click="goSignup()">Pas de compte ? Inscrivez-vous ici</a>
  </div>
</template>

<script>
export default {
  name: "Signin",
  methods: {
    goSignup() {
      this.$emit("goSignup");
    },
  },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>
